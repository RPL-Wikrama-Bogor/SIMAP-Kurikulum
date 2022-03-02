<?php

namespace App\Service\Functions;

use App\Models\Gradebook as ModelsGradebook;
use App\Models\PredicateLetter;
use App\Models\Scorecard;
use App\Models\ScorecardComponent;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Uuid;

//WIP
class Gradebook
{
    private static function performUpdateOrCreate($scorecard, $existKeys, $isK21)
    {
        $data = collect([]);
        foreach ($scorecard['components'] as $item) {
            $exist = $existKeys[$item->id] ?? null;

            if ($exist) {
                $exist->save();

                continue;
            }

            $data->push([
                'id' => Uuid::uuid4()->toString(),
                'gradebook_component_id' => $item->id,
                'scorecard_id' => $scorecard->id,
            ]);
        }

        return $data->toArray();
    }

    public static function syncScorecardComponent($gradebookId, $isK21 = false)
    {
        $gradebookComponents = ModelsGradebook::findOrFail($gradebookId)->components()->get();
        $scorecards = Scorecard::where('gradebook_id', $gradebookId)->get();
        $exists = ScorecardComponent::whereIn('gradebook_component_id', $gradebookComponents->pluck('id'))
            ->whereIn('scorecard_id', $scorecards->pluck('id'))->get();

        $scorecardsArray = $scorecards->mapWithKeys(function ($item) use ($gradebookComponents, $exists) {
            $data = $item;
            $data['components'] = $gradebookComponents;
            $data['exists'] = collect(
                $exists->where('scorecard_id', $item->id)
                    ->whereIn('gradebook_component_id', $gradebookComponents->pluck('id'))
                    ->values(),
            );

            return [$item->id => $data];
        });

        return DB::transaction(function () use ($scorecardsArray, $isK21) {
            $data = collect([]);
            foreach ($scorecardsArray as $scorecard) {
                $existKeys = $scorecard['exists']->keyBy('gradebook_component_id');
                $insertData = self::performUpdateOrCreate($scorecard, $existKeys, $isK21);
                ScorecardComponent::insert($insertData);
            }

            return $data;
        });
    }

    public static function recalculate($gradebookId, $isK21 = false)
    {
        $gradebook = ModelsGradebook::findOrFail($gradebookId);
        $scorecards = $gradebook->scorecards;
        $predicates = PredicateLetter::where('gradebook_id', $gradebookId)
                        ->get()
                        ->mapToGroups(fn ($item) => [$item->type => $item]);

        return DB::transaction(function () use ($gradebook, $scorecards, $predicates, $isK21) {
            $data = collect([]);

            foreach ($scorecards as $scorecard) {
                $components = collect($scorecard->components);

                if ($components->isEmpty()) {
                    $scorecard->final_score = null;
                    $scorecard->final_score_letter_id = null;
                    $scorecard->knowledge_score = null;
                    $scorecard->skill_score = null;

                    $scorecard->save();
                    $data->push($scorecard);

                    continue;
                }

                if ($isK21) {
                    $generalAverage = (float) $components->sum(
                        fn ($item) => $item->pivot->general_score * $item->general_weight,
                    );

                    $generalWeight = (float) $components->sum('general_weight');
                    $generalScore = $generalAverage / $generalWeight;

                    $scorecard->final_score = $generalScore;

                    if (isset($predicates[PredicateLetter::FINAL])) {
                        $gFinalScoreLetterId = self::determinePredicateId(
                            $predicates[PredicateLetter::FINAL],
                            $generalAverage,
                        );

                        $scorecard->final_score_letter_id = $gFinalScoreLetterId;
                    }

                    $scorecard->save();
                    $data->push($scorecard);

                    continue;
                }

                $knowledgeAverage = (float) $components->sum(
                    fn ($item) => $item->pivot->knowledge_score * $item->knowledge_weight,
                );

                $knowledgeWeights = (float) $components->sum('knowledge_weight');

                $knowledgeScore = 0;

                if ($knowledgeWeights > 0) {
                    $knowledgeScore = $knowledgeAverage / $knowledgeWeights;
                }

                if (isset($predicates[PredicateLetter::KNOWLEDGE])) {
                    $knlowledgeLetterId = self::determinePredicateId(
                        $predicates[PredicateLetter::KNOWLEDGE],
                        $knowledgeAverage,
                    );
                    $scorecard->knowledge_score_letter_id = $knlowledgeLetterId;
                }

                $skillAverage = (float) $components->sum(
                    fn ($item) => $item->pivot->skill_score * $item->skill_weight,
                );

                $skillWeights = (float) $components->sum('skill_weight');
                $skillScore = $skillAverage / $skillWeights;


                if (isset($predicates[PredicateLetter::SKILL])) {
                    $skillLetterId = self::determinePredicateId(
                        $predicates[PredicateLetter::SKILL],
                        $skillAverage,
                    );
                    $scorecard->skill_score_letter_id = $skillLetterId;
                }

                $scorecard->knowledge_score = $knowledgeScore;
                $scorecard->skill_score = $skillScore;

                $gKnowledgeWeight = $gradebook->weights->knowledge ?? 0;
                $gSkillWeight = $gradebook->weights->skill ?? 0;
                $gKnowledgeScore = (float) $gKnowledgeWeight * $scorecard->knowledge_score;
                $gSkillScore = (float) $gSkillWeight * $scorecard->skill_score;
                $gFinalScore = $gKnowledgeScore + $gSkillScore;

                if (isset($predicates[PredicateLetter::FINAL])) {
                    $gFinalScoreLetterId = self::determinePredicateId(
                        $predicates[PredicateLetter::FINAL],
                        $gFinalScore,
                    );

                    $scorecard->final_score_letter_id = $gFinalScoreLetterId;
                }

                $scorecard->final_score = $gFinalScore;

                $scorecard->save();
                $data->push($scorecard);
            }

            return $data;
        });
    }

    private static function determinePredicateId($predicates, $score)
    {
        return $predicates->where('min_score', '<=', $score)
            ->where('max_score', '>=', $score)
            ->values()
            ->first()->id ?? null;
    }
}

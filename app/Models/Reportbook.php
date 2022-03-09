<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reportbook extends Model
{
    use HasFactory;

    protected $casts = [
        'score_config' => 'array',
    ];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}

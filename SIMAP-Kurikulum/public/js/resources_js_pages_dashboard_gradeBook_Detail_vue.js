"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_dashboard_gradeBook_Detail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Modal.vue */ "./resources/js/components/Modal.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // modal


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "gradeBookDetail",
  components: {
    "modal": _components_Modal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      period: {},
      course: {},
      gradebookData: {},
      predicates: [],
      predicateDetail: {},
      predicateSubmitForm: {
        letter: null,
        max_score: 0,
        min_score: null,
        gradebook_id: this.$route.params.gb
      },
      components: [],
      totalKnowledge: null,
      totalSkill: null,
      knowledge_weight: 1,
      skill_weight: 1,
      general_weight: 1,
      componentSubmitForm: {
        title: null,
        abbreviation: null,
        knowledge_weight: null,
        skill_weight: null,
        general_weight: null,
        gradebook_id: this.$route.params.gb
      },
      componentEditForm: {},
      errorInWeight: {
        status: false,
        message: null
      },
      modalEditWeights: false,
      modalAddPredikat: false,
      modalEditPredikat: false,
      modalDeletePredikat: false,
      modalAddComponent: false,
      modalEditComponent: false,
      modalDeleteComponent: false,
      modalRedirect: false
    };
  },
  created: function created() {
    this.getGradebook(this.$route.params.gb);
    this.getPeriod(this.$route.params.period);
    this.getCourse(this.$route.params.course);
    this.getPredicateLetter(this.$route.params.gb);
    this.getGradebookComponents(this.$route.params.gb);
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(['errorMessage', 'errors', 'isLoading'])),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('reportPeriods', ['detail'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('courses', ['show'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('gradebooks', ['gradebook', 'updateGradebook'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('predicateLetters', ['getPredicate', 'predicate', 'createPredicate', 'updatePredicate', 'deletePredicate'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('gradebookComponents', ['getComponents', 'component', 'createComponents', 'updateComponent', 'deleteGradebookComponent'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('studentGroups', ['getByCourse'])), {}, {
    getPeriod: function getPeriod(id) {
      var _this = this;

      this.detail(id).then(function (result) {
        _this.period = result;
      });
    },
    getCourse: function getCourse(id) {
      var _this2 = this;

      this.show(id).then(function (result) {
        _this2.course = result;
      });
    },
    getGradebook: function getGradebook(id) {
      var _this3 = this;

      this.gradebook(id).then(function (result) {
        _this3.gradebookData = result;
        _this3.gradebookData.scorebar = parseInt(result.scorebar).toFixed();
        _this3.gradebookData.weights.knowledge = result.weights.knowledge * 100;
        _this3.gradebookData.weights.skill = result.weights.skill * 100;
      });
    },
    editWeights: function editWeights() {
      var _this4 = this;

      var payload = {
        id: this.gradebookData.id,
        data: this.gradebookData
      };
      this.updateGradebook(payload).then(function (result) {
        _this4.getGradebook(result.id);

        _this4.modalEditWeights = false;
      });
    },
    getPredicateLetter: function getPredicateLetter(id) {
      var _this5 = this;

      this.getPredicate(id).then(function (result) {
        _this5.predicates = result;
      });
    },
    addPredikat: function addPredikat() {
      var _this6 = this;

      this.createPredicate(this.predicateSubmitForm).then(function (result) {
        _this6.predicateSubmitForm.letter = null;
        _this6.predicateSubmitForm.min_score = null;
        _this6.modalAddPredikat = false;

        _this6.getPredicateLetter(_this6.$route.params.gb);
      });
    },
    showModalEditPredicate: function showModalEditPredicate(id) {
      var _this7 = this;

      this.predicate(id).then(function (result) {
        _this7.predicateDetail = result;
        _this7.modalEditPredikat = true;
      });
    },
    editPredikat: function editPredikat() {
      var _this8 = this;

      var payload = {
        id: this.predicateDetail.id,
        data: this.predicateDetail
      };
      this.updatePredicate(payload).then(function (result) {
        _this8.modalEditPredikat = false;

        _this8.getPredicateLetter(_this8.$route.params.gb);
      });
    },
    showModalDeletePredikat: function showModalDeletePredikat() {
      this.modalEditPredikat = false;
      this.modalDeletePredikat = true;
    },
    checkNum: function checkNum(e) {
      var num = e.target.value;

      if (parseInt(num) > 9) {
        var str = num.toString();
        e.target.value = str.slice(0, 1);
      }
    },
    upScore: function upScore(model) {
      if (model === "knowledge_weight") {
        if (parseInt(this.knowledge_weight) < 9) {
          this.knowledge_weight = parseInt(this.knowledge_weight) + 1;
        }
      } else if (model === "skill_weight") {
        if (parseInt(this.skill_weight) < 9) {
          this.skill_weight = parseInt(this.skill_weight) + 1;
        }
      } else if (model === "general_weight") {
        if (parseInt(this.general_weight) < 9) {
          this.general_weight = parseInt(this.general_weight) + 1;
        }
      } else if (model === "knowledge_weight_edit") {
        if (parseInt(this.componentEditForm.knowledge_weight) < 9) {
          this.componentEditForm.knowledge_weight = parseInt(this.componentEditForm.knowledge_weight) + 1;
        }
      } else if (model === "skill_weight_edit") {
        if (parseInt(this.componentEditForm.skill_weight) < 9) {
          this.componentEditForm.skill_weight = parseInt(this.componentEditForm.skill_weight) + 1;
        }
      } else if (model === "general_weight_edit") {
        if (parseInt(this.componentEditForm.general_weight) < 9) {
          this.componentEditForm.general_weight = parseInt(this.componentEditForm.general_weight) + 1;
        }
      }
    },
    downScore: function downScore(model) {
      if (model === "knowledge_weight") {
        if (parseInt(this.knowledge_weight) !== 0) {
          this.knowledge_weight = parseInt(this.knowledge_weight) - 1;
        }
      } else if (model === "skill_weight") {
        if (parseInt(this.skill_weight) !== 0) {
          this.skill_weight = parseInt(this.skill_weight) - 1;
        }
      } else if (model === "general_weight") {
        if (parseInt(this.general_weight) !== 0) {
          this.general_weight = parseInt(this.general_weight) - 1;
        }
      } else if (model === "knowledge_weight_edit") {
        if (parseInt(this.componentEditForm.knowledge_weight) !== 0) {
          this.componentEditForm.knowledge_weight = parseInt(this.componentEditForm.knowledge_weight) - 1;
        }
      } else if (model === "skill_weight_edit") {
        if (parseInt(this.componentEditForm.skill_weight) !== 0) {
          this.componentEditForm.skill_weight = parseInt(this.componentEditForm.skill_weight) - 1;
        }
      } else if (model === "general_weight_edit") {
        if (parseInt(this.componentEditForm.general_weight) !== 0) {
          this.componentEditForm.general_weight = parseInt(this.componentEditForm.general_weight) - 1;
        }
      }
    },
    deletePredikat: function deletePredikat() {
      var _this9 = this;

      this.deletePredicate(this.predicateDetail.id).then(function (result) {
        _this9.modalDeletePredikat = false;

        _this9.getPredicateLetter(_this9.$route.params.gb);
      });
    },
    getGradebookComponents: function getGradebookComponents(id) {
      var _this10 = this;

      this.getComponents(id).then(function (result) {
        _this10.components = result;

        if (_this10.components.length > 0) {
          _this10.totalKnowledge = 0;
          _this10.totalSkill = 0;

          for (var i = 0; i < _this10.components.length; i++) {
            _this10.totalKnowledge += _this10.components[i].knowledge_weight;
            _this10.totalSkill += _this10.components[i].skill_weight;
          }
        }
      });
    },
    addComponent: function addComponent() {
      var _this11 = this;

      if (this.componentSubmitForm.knowledge_weight + this.componentSubmitForm.skill_weight > 10) {
        this.errorInWeight.status = true;
        this.errorInWeight.message = "total bobot pengetahuan dan keterampilan tidak boleh lebih dari 10";
      }

      if (this.course.curriculum !== 'K21 | Sekolah Penggerak') {
        this.componentSubmitForm.knowledge_weight = this.knowledge_weight;
        this.componentSubmitForm.skill_weight = this.skill_weight;
      } else {
        this.componentSubmitForm.general_weight = this.general_weight;
      }

      this.createComponents(this.componentSubmitForm).then(function (result) {
        _this11.componentSubmitForm.title = null;
        _this11.componentSubmitForm.abbreviation = null;
        _this11.componentSubmitForm.knowledge_weight = null;
        _this11.knowledge_weight = 1;
        _this11.componentSubmitForm.skill_weight = null;
        _this11.skill_weight = 1;
        _this11.general_weight = 1;
        _this11.componentSubmitForm.general_weight = null;
        _this11.modalAddComponent = false;

        _this11.getGradebookComponents(_this11.$route.params.gb);
      });
    },
    showComponent: function showComponent(id) {
      var _this12 = this;

      this.component(id).then(function (result) {
        _this12.componentEditForm = result;
        _this12.modalEditComponent = true;
      });
    },
    editComponent: function editComponent() {
      var _this13 = this;

      if (this.componentEditForm.knowledge_weight + this.componentEditForm.skill_weight > 10) {
        this.errorInWeight.status = true;
        this.errorInWeight.message = "total bobot pengetahuan dan keterampilan tidak boleh lebih dari 10";
      }

      var payload = {
        id: this.componentEditForm.id,
        data: this.componentEditForm
      };
      this.updateComponent(payload).then(function (result) {
        _this13.modalEditComponent = false;

        _this13.getGradebookComponents(_this13.$route.params.gb);
      });
    },
    showModalDeleteComponent: function showModalDeleteComponent() {
      this.modalEditComponent = false;
      this.modalDeleteComponent = true;
    },
    deleteComponent: function deleteComponent() {
      var _this14 = this;

      this.deleteGradebookComponent(this.componentEditForm.id).then(function (result) {
        _this14.modalDeleteComponent = false;

        _this14.getGradebookComponents(_this14.$route.params.gb);
      });
    },
    redirectPage: function redirectPage() {
      var _this15 = this;

      this.getByCourse(this.course.id).then(function (result) {
        if (result.length < 1) {
          _this15.modalRedirect = true;
        } else {
          _this15.$router.push({
            name: 'gradebooks.course.detail.group',
            params: {
              period: _this15.period.id,
              course: _this15.course.id,
              gb: _this15.$route.params.gb,
              sg: result[0].id
            }
          });
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=style&index=0&id=30b8bec4&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=style&index=0&id=30b8bec4&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.nav-breadcrumb[data-v-30b8bec4] {\n    margin-bottom: 20px;\n}\n.breadcrumb-item[data-v-30b8bec4] {\n    font-size: 1rem;\n}\nh5[data-v-30b8bec4] {\n    font-weight: 600;\n}\n.row.top-section[data-v-30b8bec4] {\n    margin-left: 4px !important;\n    margin-right: 4px !important;\n}\n.border[data-v-30b8bec4] {\n    border-color: #333 !important;\n}\np[data-v-30b8bec4] {\n    margin-bottom: 0.3rem !important;\n}\n.fas.fa-pen[data-v-30b8bec4],\n.fas.fa-plus[data-v-30b8bec4] {\n    margin-right: 8px;\n    cursor: pointer;\n}\n.fas.fa-plus.i-input[data-v-30b8bec4] {\n    margin-right: 0;\n}\ntbody[data-v-30b8bec4] {\n    border-top: none !important;\n}\ntable[data-v-30b8bec4] {\n    max-width: 500px;\n}\n.btn.btn-sm[data-v-30b8bec4] {\n    padding: 0 !important;\n}\n.bg-muted[data-v-30b8bec4] {\n    background-color: #dadada;\n}\n.card-title[data-v-30b8bec4] {\n    margin-bottom: 0 !important;\n}\n.card-body[data-v-30b8bec4] {\n    padding: 0 !important;\n}\n.border-right[data-v-30b8bec4] {\n    border-right: 1px solid #dadada;\n}\n.p-col[data-v-30b8bec4] {\n    padding-left: 25px !important;\n}\n@media (max-width: 575px) {\nh5[data-v-30b8bec4] {\n        font-size: 0.9rem !important;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=style&index=0&id=30b8bec4&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=style&index=0&id=30b8bec4&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_30b8bec4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=style&index=0&id=30b8bec4&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=style&index=0&id=30b8bec4&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_30b8bec4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_30b8bec4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/pages/dashboard/gradeBook/Detail.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/dashboard/gradeBook/Detail.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Detail_vue_vue_type_template_id_30b8bec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=30b8bec4&scoped=true& */ "./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=template&id=30b8bec4&scoped=true&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js& */ "./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=script&lang=js&");
/* harmony import */ var _Detail_vue_vue_type_style_index_0_id_30b8bec4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detail.vue?vue&type=style&index=0&id=30b8bec4&scoped=true&lang=css& */ "./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=style&index=0&id=30b8bec4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_vue_vue_type_template_id_30b8bec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Detail_vue_vue_type_template_id_30b8bec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "30b8bec4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/dashboard/gradeBook/Detail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=style&index=0&id=30b8bec4&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=style&index=0&id=30b8bec4&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_30b8bec4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=style&index=0&id=30b8bec4&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=style&index=0&id=30b8bec4&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=template&id=30b8bec4&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=template&id=30b8bec4&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_30b8bec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_30b8bec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_30b8bec4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=template&id=30b8bec4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=template&id=30b8bec4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=template&id=30b8bec4&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/gradeBook/Detail.vue?vue&type=template&id=30b8bec4&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mt-3" }, [
    _vm.isLoading ? _c("div", { staticClass: "loader" }) : _vm._e(),
    _vm._v(" "),
    _vm.isLoading
      ? _c("div", { staticClass: "w-100 card-loading" }, [
          _c("img", {
            staticClass: "d-block m-auto",
            attrs: { src: "/assets/img/loading.png", alt: "loading" },
          }),
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.errorMessage
      ? _c("div", { staticClass: "alert alert-danger my-3" }, [
          _vm._v("\n        " + _vm._s(_vm.errorMessage) + "\n    "),
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.isLoading
      ? _c(
          "div",
          [
            _c(
              "nav",
              {
                staticClass: "nav-breadcrumb",
                attrs: { "aria-label": "breadcrumb" },
              },
              [
                _c("ol", { staticClass: "breadcrumb" }, [
                  _c(
                    "li",
                    { staticClass: "breadcrumb-item" },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "gradebooks.period",
                              params: { page: 6 },
                            },
                          },
                        },
                        [
                          _c("a", { attrs: { href: "#" } }, [
                            _vm._v("Buku Nilai"),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "breadcrumb-item" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "router",
                          attrs: {
                            to: {
                              name: "gradebooks.course",
                              params: { page: 6, period: _vm.period.id },
                            },
                          },
                        },
                        [_vm._v("Buku Nilai " + _vm._s(_vm.period.title))]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "breadcrumb-item active",
                      attrs: { "aria-current": "page" },
                    },
                    [
                      _vm._v(
                        "Rapor " +
                          _vm._s(_vm.period.title) +
                          " - " +
                          _vm._s(_vm.course.caption) +
                          " Kelas " +
                          _vm._s(_vm.course.entry_year_with_class)
                      ),
                    ]
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex justify-content-between flex-wrap mb-3" },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-white text-primary btn-lg",
                      attrs: { href: "#" },
                      on: {
                        click: function ($event) {
                          _vm.modalEditWeights = true
                        },
                      },
                    },
                    [_c("span", { staticClass: "fas fa-pen" }), _vm._v("Edit")]
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _vm.course.curriculum !== "K21 | Sekolah Penggerak"
              ? _c("div", { staticClass: "row top-section mt-3" }, [
                  _c("div", { staticClass: "col-4 p-2 border" }, [
                    _c("p", { staticClass: "text-secondary text-capitalize" }, [
                      _vm._v("bobot nilai pengetahuan"),
                    ]),
                    _vm._v(" "),
                    _vm.gradebookData.weights
                      ? _c("h5", { staticClass: "text-center" }, [
                          _vm._v(
                            _vm._s(_vm.gradebookData.weights.knowledge) + "%"
                          ),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4 p-2 border" }, [
                    _c("p", { staticClass: "text-secondary text-capitalize" }, [
                      _vm._v("bobot nilai keterampilan"),
                    ]),
                    _vm._v(" "),
                    _vm.gradebookData.weights
                      ? _c("h5", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.gradebookData.weights.skill) + "%"),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4 p-2 border" }, [
                    _c("p", { staticClass: "text-secondary text-capitalize" }, [
                      _vm._v("skor ketuntasan minimal"),
                    ]),
                    _vm._v(" "),
                    _c("h5", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.gradebookData.scorebar)),
                    ]),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.course.curriculum === "K21 | Sekolah Penggerak"
              ? _c("div", { staticClass: "row top-section mt-3" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 p-2 border" }, [
                    _c("p", { staticClass: "text-secondary text-capitalize" }, [
                      _vm._v("skor ketuntasan minimal"),
                    ]),
                    _vm._v(" "),
                    _c("h5", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.gradebookData.scorebar)),
                    ]),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("h5", { staticClass: "text-capitalize mt-5" }, [
              _vm._v("pengaturan predikat nilai pada rapor"),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-secondary" }, [
              _vm._v(
                "prediket pada nilai siswa/i akan otomatis terbuat sesuai aturan dibawah ini"
              ),
            ]),
            _vm._v(" "),
            _c(
              "table",
              { staticClass: "table table-bordered text-center bg-white" },
              [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.predicates, function (pl, index) {
                      return _c("tr", { key: index }, [
                        _c("th", [_vm._v(_vm._s(pl.letter))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(">= " + _vm._s(pl.min_score))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-sm btn-white text-dark",
                              attrs: { href: "#" },
                              on: {
                                click: function ($event) {
                                  return _vm.showModalEditPredicate(pl.id)
                                },
                              },
                            },
                            [_c("span", { staticClass: "fas fa-pen predikat" })]
                          ),
                        ]),
                      ])
                    }),
                    _vm._v(" "),
                    _vm.predicates.length < 1
                      ? _c("tr", [
                          _c(
                            "td",
                            {
                              staticClass: "text-center text-capitalize",
                              attrs: { colspan: "3" },
                            },
                            [_vm._v("data predikat belum tersedia")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { attrs: { colspan: "3" } }, [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-sm btn white text-primary",
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                _vm.modalAddPredikat = true
                              },
                            },
                          },
                          [
                            _c("span", { staticClass: "fas fa-plus" }),
                            _vm._v("tambah predikat"),
                          ]
                        ),
                      ]),
                    ]),
                  ],
                  2
                ),
              ]
            ),
            _vm._v(" "),
            _c("h5", { staticClass: "text-capitalize mt-5" }, [
              _vm._v("komponen penilaian"),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-secondary" }, [
              _vm._v(
                "Komponen nilai otomatis menambahkan siswa/i yang terdaftar di pelajaran "
              ),
              _c("span", { staticClass: "text-capitalize" }, [
                _vm._v(
                  _vm._s(_vm.course.caption) +
                    " " +
                    _vm._s(_vm.course.entry_year_with_class)
                ),
              ]),
            ]),
            _vm._v(" "),
            _vm.course.curriculum !== "K21 | Sekolah Penggerak"
              ? _c("div", { staticClass: "d-flex flex-column mb-4 mt-4" }, [
                  _c("b", { staticClass: "text-capitalize" }, [
                    _vm._v(
                      "total bobot pengetahuan : " + _vm._s(_vm.totalKnowledge)
                    ),
                  ]),
                  _vm._v(" "),
                  _c("b", { staticClass: "text-capitalize" }, [
                    _vm._v(
                      "total bobot keterampilan : " + _vm._s(_vm.totalSkill)
                    ),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.components, function (gc, index) {
              return _c("div", { key: index, staticClass: "card w-100 mb-3" }, [
                _c(
                  "div",
                  { staticClass: "card-title bg-muted p-2 text-center" },
                  [
                    _c("b", { staticClass: "text-capitalize" }, [
                      _c(
                        "a",
                        {
                          staticClass: "text-dark",
                          attrs: { href: "#" },
                          on: { click: _vm.redirectPage },
                        },
                        [
                          _vm._v(
                            _vm._s(gc.title) +
                              " (" +
                              _vm._s(gc.abbreviation) +
                              ")"
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("span", {
                      staticClass: "fas fa-pen",
                      staticStyle: { "margin-left": "8px" },
                      on: {
                        click: function ($event) {
                          return _vm.showComponent(gc.id)
                        },
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                gc.knowledge_weight
                  ? _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-6 border-right p-col" }, [
                          _c(
                            "p",
                            { staticClass: "text-secondary text-capitalize" },
                            [_vm._v("pengetahuan")]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-black" }, [
                            _vm._v(_vm._s(gc.knowledge_weight)),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-6" }, [
                          _c(
                            "p",
                            { staticClass: "text-secondary text-capitalize" },
                            [_vm._v("keterampilan")]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-black" }, [
                            _vm._v(_vm._s(gc.skill_weight)),
                          ]),
                        ]),
                      ]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                gc.general_weight
                  ? _c("div", { staticClass: "card-body text-center" }, [
                      _c(
                        "p",
                        { staticClass: "text-secondary text-capitalize" },
                        [_vm._v("bobot penilaian")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-black" }, [
                        _vm._v(_vm._s(gc.general_weight)),
                      ]),
                    ])
                  : _vm._e(),
              ])
            }),
            _vm._v(" "),
            _vm.components.length < 1
              ? _c("div", { staticClass: "card w-100 mb-3 mt-3 p-2" }, [
                  _c("p", { staticClass: "text-center" }, [
                    _vm._v("Data penilaian belum tersedia."),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-white text-primary",
                attrs: { href: "#" },
                on: {
                  click: function ($event) {
                    _vm.modalAddComponent = true
                  },
                },
              },
              [
                _c("span", { staticClass: "fas fa-plus" }),
                _vm._v("Tambah Komponen Penilaian"),
              ]
            ),
            _vm._v(" "),
            _vm.modalEditWeights
              ? _c(
                  "modal",
                  {
                    attrs: { action: _vm.editWeights },
                    on: {
                      close: function ($event) {
                        _vm.modalEditWeights = false
                      },
                    },
                  },
                  [
                    _c("h5", { attrs: { slot: "header" }, slot: "header" }, [
                      _vm._v("Edit Pengaturan Bobot dan KKM"),
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                      _vm.errorMessage
                        ? _c(
                            "div",
                            { staticClass: "alert alert-danger mb-3" },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.errorMessage) +
                                  "\n            "
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.course.curriculum !== "K21 | Sekolah Penggerak"
                        ? _c("div", { staticClass: "row mb-3" }, [
                            _c("b", { staticClass: "mb-4" }, [
                              _vm._v(
                                "Total bobot nilai pengetahuan dan keterampilan harus 100%"
                              ),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-sm-6" }, [
                              _c("label", { staticClass: "mb-2" }, [
                                _vm._v("Bobot Pengetahuan"),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.gradebookData.weights.knowledge,
                                    expression:
                                      "gradebookData.weights.knowledge",
                                  },
                                ],
                                staticClass: "form-control",
                                class: { "is-invalid": _vm.errors.weights },
                                attrs: { type: "number" },
                                domProps: {
                                  value: _vm.gradebookData.weights.knowledge,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.gradebookData.weights,
                                      "knowledge",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.weights
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(_vm.errors.weights[0]) +
                                          "\n                    "
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-sm-6" }, [
                              _c("label", { staticClass: "mb-2" }, [
                                _vm._v("Bobot Keterampilan"),
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.gradebookData.weights.skill,
                                    expression: "gradebookData.weights.skill",
                                  },
                                ],
                                staticClass: "form-control",
                                class: { "is-invalid": _vm.errors.weights },
                                attrs: { type: "number" },
                                domProps: {
                                  value: _vm.gradebookData.weights.skill,
                                },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.gradebookData.weights,
                                      "skill",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _vm.errors.weights
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(_vm.errors.weights[0]) +
                                          "\n                    "
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { staticClass: "mb-2" }, [
                          _vm._v("Skor Ketuntasan Minimal"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.gradebookData.scorebar,
                              expression: "gradebookData.scorebar",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.scorebar },
                          attrs: { type: "number" },
                          domProps: { value: _vm.gradebookData.scorebar },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.gradebookData,
                                "scorebar",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.errors.scorebar
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.errors.scorebar[0]) +
                                  "\n                "
                              ),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.modalAddPredikat
              ? _c(
                  "modal",
                  {
                    attrs: { action: _vm.addPredikat },
                    on: {
                      close: function ($event) {
                        _vm.modalAddPredikat = false
                      },
                    },
                  },
                  [
                    _c("h5", { attrs: { slot: "header" }, slot: "header" }, [
                      _vm._v("Tambah Predikat"),
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                      _vm.errorMessage
                        ? _c(
                            "div",
                            { staticClass: "alert alert-danger mb-3" },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.errorMessage) +
                                  "\n            "
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group mb-3" }, [
                        _c("label", { staticClass: "mb-2" }, [
                          _vm._v("Predikat"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.predicateSubmitForm.letter,
                              expression: "predicateSubmitForm.letter",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.letter },
                          attrs: { type: "text", placeholder: "Contoh : A" },
                          domProps: { value: _vm.predicateSubmitForm.letter },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.predicateSubmitForm,
                                "letter",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.errors.letter
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.errors.letter[0]) +
                                  "\n                "
                              ),
                            ])
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "d-flex flex-column" }, [
                          _c("label", { staticClass: "mb-1" }, [
                            _vm._v("Skor Pembatas"),
                          ]),
                          _vm._v(" "),
                          _c("small", { staticClass: "mb-2" }, [
                            _vm._v(
                              "Predikat tersebut didapatkan apabila nilai lebih sama dengan dari nilai berikut"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.predicateSubmitForm.min_score,
                              expression: "predicateSubmitForm.min_score",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.min_score },
                          attrs: { type: "number", placeholder: "Contoh: 75" },
                          domProps: {
                            value: _vm.predicateSubmitForm.min_score,
                          },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.predicateSubmitForm,
                                "min_score",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.errors.min_score
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.errors.min_score[0]) +
                                  "\n                "
                              ),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.modalEditPredikat
              ? _c(
                  "modal",
                  {
                    attrs: { action: _vm.editPredikat },
                    on: {
                      close: function ($event) {
                        _vm.modalEditPredikat = false
                      },
                    },
                  },
                  [
                    _c("h5", { attrs: { slot: "header" }, slot: "header" }, [
                      _vm._v("Edit Predikat"),
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                      _vm.errorMessage
                        ? _c(
                            "div",
                            { staticClass: "alert alert-danger mb-3" },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.errorMessage) +
                                  "\n            "
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group mb-3" }, [
                        _c("label", { staticClass: "mb-2" }, [
                          _vm._v("Predikat"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.predicateDetail.letter,
                              expression: "predicateDetail.letter",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.letter },
                          attrs: { type: "text" },
                          domProps: { value: _vm.predicateDetail.letter },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.predicateDetail,
                                "letter",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.errors.letter
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.errors.letter[0]) +
                                  "\n                "
                              ),
                            ])
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "d-flex flex-column" }, [
                          _c("label", { staticClass: "mb-1" }, [
                            _vm._v("Skor Pembatas"),
                          ]),
                          _vm._v(" "),
                          _c("small", { staticClass: "mb-2" }, [
                            _vm._v(
                              "Predikat tersebut didapatkan apabila nilai lebih sama dengan dari nilai berikut"
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.predicateDetail.min_score,
                              expression: "predicateDetail.min_score",
                            },
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.errors.min_score },
                          attrs: { type: "number" },
                          domProps: { value: _vm.predicateDetail.min_score },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.predicateDetail,
                                "min_score",
                                $event.target.value
                              )
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.errors.min_score
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.errors.min_score[0]) +
                                  "\n                "
                              ),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-danger",
                        attrs: { slot: "button", type: "button" },
                        on: { click: _vm.showModalDeletePredikat },
                        slot: "button",
                      },
                      [_vm._v("Hapus")]
                    ),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.modalDeletePredikat
              ? _c(
                  "modal",
                  {
                    attrs: { deleteOpt: _vm.deletePredikat },
                    on: {
                      close: function ($event) {
                        _vm.modalDeletePredikat = false
                      },
                    },
                  },
                  [
                    _c("h5", { attrs: { slot: "header" }, slot: "header" }, [
                      _vm._v("Hapus Predikat"),
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                      _c("span", [
                        _vm._v("Yakin akan menghapus predikat "),
                        _c("b", { staticClass: "text-capitalize" }, [
                          _vm._v(
                            _vm._s(_vm.predicateDetail.letter) +
                              " dengan aturan >= " +
                              _vm._s(_vm.predicateDetail.min_score)
                          ),
                        ]),
                        _vm._v(
                          "? data terkait mungkin saja akan mengalami perubahan"
                        ),
                      ]),
                    ]),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.modalAddComponent
              ? _c(
                  "modal",
                  {
                    attrs: { action: _vm.addComponent },
                    on: {
                      close: function ($event) {
                        _vm.modalAddComponent = false
                      },
                    },
                  },
                  [
                    _c("h5", { attrs: { slot: "header" }, slot: "header" }, [
                      _vm._v("Tambah Penilaian"),
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                      _vm.errorMessage
                        ? _c(
                            "div",
                            { staticClass: "alert alert-danger mb-3" },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.errorMessage) +
                                  "\n            "
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.errorInWeight.status
                        ? _c(
                            "div",
                            { staticClass: "alert alert-danger mb-3" },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.errorInWeight.message) +
                                  "\n            "
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mb-3" }, [
                        _c("div", { staticClass: "form-group col-sm-6" }, [
                          _c("label", { staticClass: "mb-2" }, [
                            _vm._v("Singkatan Penilaian"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.componentSubmitForm.abbreviation,
                                expression: "componentSubmitForm.abbreviation",
                              },
                            ],
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.errors.abbreviation },
                            attrs: {
                              type: "text",
                              placeholder: "Contoh : PH 1",
                            },
                            domProps: {
                              value: _vm.componentSubmitForm.abbreviation,
                            },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.componentSubmitForm,
                                  "abbreviation",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                          _vm._v(" "),
                          _vm.errors.abbreviation
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.abbreviation[0]) +
                                    "\n                    "
                                ),
                              ])
                            : _vm._e(),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-sm-6" }, [
                          _c("label", { staticClass: "mb-2" }, [
                            _vm._v("Nama Penilaian"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.componentSubmitForm.title,
                                expression: "componentSubmitForm.title",
                              },
                            ],
                            staticClass: "form-control",
                            class: { "is-invalid": _vm.errors.title },
                            attrs: {
                              type: "text",
                              placeholder: "Contoh : Penilaian Harian 1",
                            },
                            domProps: { value: _vm.componentSubmitForm.title },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.componentSubmitForm,
                                  "title",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                          _vm._v(" "),
                          _vm.errors.title
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(_vm.errors.title[0]) +
                                    "\n                    "
                                ),
                              ])
                            : _vm._e(),
                        ]),
                      ]),
                      _vm._v(" "),
                      _vm.course.curriculum !== "K21 | Sekolah Penggerak"
                        ? _c("div", { staticClass: "row mb-3" }, [
                            _c("div", { staticClass: "form-group col-sm-6" }, [
                              _c("label", { staticClass: "mb-2" }, [
                                _vm._v("Bobot Pengetahuan"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-outline-secondary",
                                    on: {
                                      click: function ($event) {
                                        return _vm.downScore("knowledge_weight")
                                      },
                                    },
                                  },
                                  [_c("span", { staticClass: "fas fa-minus" })]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.knowledge_weight,
                                      expression: "knowledge_weight",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.errors.knowledge_weight,
                                  },
                                  attrs: { type: "number" },
                                  domProps: { value: _vm.knowledge_weight },
                                  on: {
                                    keyup: _vm.checkNum,
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.knowledge_weight = $event.target.value
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-outline-secondary",
                                    on: {
                                      click: function ($event) {
                                        return _vm.upScore("knowledge_weight")
                                      },
                                    },
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fas fa-plus i-input",
                                    }),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _vm.errors.knowledge_weight
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(
                                            _vm.errors.knowledge_weight[0]
                                          ) +
                                          "\n                    "
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-sm-6" }, [
                              _c("label", { staticClass: "mb-2" }, [
                                _vm._v("Bobot Keterampilan"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-outline-secondary",
                                    on: {
                                      click: function ($event) {
                                        return _vm.downScore("skill_weight")
                                      },
                                    },
                                  },
                                  [_c("span", { staticClass: "fas fa-minus" })]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.skill_weight,
                                      expression: "skill_weight",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.errors.skill_weight,
                                  },
                                  attrs: { type: "number" },
                                  domProps: { value: _vm.skill_weight },
                                  on: {
                                    keyup: _vm.checkNum,
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.skill_weight = $event.target.value
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-outline-secondary",
                                    on: {
                                      click: function ($event) {
                                        return _vm.upScore("skill_weight")
                                      },
                                    },
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fas fa-plus i-input",
                                    }),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _vm.errors.skill_weight
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(_vm.errors.skill_weight[0]) +
                                          "\n                    "
                                      ),
                                    ]
                                  )
                                : _vm._e(),
                            ]),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.course.curriculum == "K21 | Sekolah Penggerak"
                        ? _c("div", { staticClass: "form-group col-sm-6" }, [
                            _c("label", { staticClass: "mb-2" }, [
                              _vm._v("Bobot Penilaian"),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-secondary",
                                  on: {
                                    click: function ($event) {
                                      return _vm.downScore("general_weight")
                                    },
                                  },
                                },
                                [_c("span", { staticClass: "fas fa-minus" })]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.general_weight,
                                    expression: "general_weight",
                                  },
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.errors.general_weight,
                                },
                                attrs: { type: "number" },
                                domProps: { value: _vm.general_weight },
                                on: {
                                  keyup: _vm.checkNum,
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.general_weight = $event.target.value
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-secondary",
                                  on: {
                                    click: function ($event) {
                                      return _vm.upScore("general_weight")
                                    },
                                  },
                                },
                                [
                                  _c("span", {
                                    staticClass: "fas fa-plus i-input",
                                  }),
                                ]
                              ),
                            ]),
                            _vm._v(" "),
                            _vm.errors.general_weight
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(_vm.errors.general_weight[0]) +
                                      "\n                "
                                  ),
                                ])
                              : _vm._e(),
                          ])
                        : _vm._e(),
                    ]),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.modalEditComponent
              ? _c(
                  "modal",
                  {
                    attrs: { action: _vm.editComponent },
                    on: {
                      close: function ($event) {
                        _vm.modalEditComponent = false
                      },
                    },
                  },
                  [
                    _c("h5", { attrs: { slot: "header" }, slot: "header" }, [
                      _vm._v("Edit Penilaian"),
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                      _vm.errorMessage
                        ? _c(
                            "div",
                            { staticClass: "alert alert-danger mb-3" },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.errorMessage) +
                                  "\n            "
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.errorInWeight.status
                        ? _c(
                            "div",
                            { staticClass: "alert alert-danger mb-3" },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.errorInWeight.message) +
                                  "\n            "
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mb-3" }, [
                        _c("div", { staticClass: "form-group col-sm-6" }, [
                          _c("label", { staticClass: "mb-2" }, [
                            _vm._v("Singkatan Penilaian"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.componentEditForm.abbreviation,
                                expression: "componentEditForm.abbreviation",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Contoh : PH 1",
                            },
                            domProps: {
                              value: _vm.componentEditForm.abbreviation,
                            },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.componentEditForm,
                                  "abbreviation",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-sm-6" }, [
                          _c("label", { staticClass: "mb-2" }, [
                            _vm._v("Nama Penilaian"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.componentEditForm.title,
                                expression: "componentEditForm.title",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Contoh : Penilaian Harian 1",
                            },
                            domProps: { value: _vm.componentEditForm.title },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.componentEditForm,
                                  "title",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _vm.course.curriculum !== "K21 | Sekolah Penggerak"
                        ? _c("div", { staticClass: "row mb-3" }, [
                            _c("div", { staticClass: "form-group col-sm-6" }, [
                              _c("label", { staticClass: "mb-2" }, [
                                _vm._v("Bobot Pengetahuan"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-outline-secondary",
                                    on: {
                                      click: function ($event) {
                                        return _vm.downScore(
                                          "knowledge_weight_edit"
                                        )
                                      },
                                    },
                                  },
                                  [_c("span", { staticClass: "fas fa-minus" })]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.componentEditForm.knowledge_weight,
                                      expression:
                                        "componentEditForm.knowledge_weight",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "number" },
                                  domProps: {
                                    value:
                                      _vm.componentEditForm.knowledge_weight,
                                  },
                                  on: {
                                    keyup: _vm.checkNum,
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.componentEditForm,
                                        "knowledge_weight",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-outline-secondary",
                                    on: {
                                      click: function ($event) {
                                        return _vm.upScore(
                                          "knowledge_weight_edit"
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fas fa-plus i-input",
                                    }),
                                  ]
                                ),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group col-sm-6" }, [
                              _c("label", { staticClass: "mb-2" }, [
                                _vm._v("Bobot Keterampilan"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-outline-secondary",
                                    on: {
                                      click: function ($event) {
                                        return _vm.downScore(
                                          "skill_weight_edit"
                                        )
                                      },
                                    },
                                  },
                                  [_c("span", { staticClass: "fas fa-minus" })]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.componentEditForm.skill_weight,
                                      expression:
                                        "componentEditForm.skill_weight",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "number" },
                                  domProps: {
                                    value: _vm.componentEditForm.skill_weight,
                                  },
                                  on: {
                                    keyup: _vm.checkNum,
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.componentEditForm,
                                        "skill_weight",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-outline-secondary",
                                    on: {
                                      click: function ($event) {
                                        return _vm.upScore("skill_weight_edit")
                                      },
                                    },
                                  },
                                  [
                                    _c("span", {
                                      staticClass: "fas fa-plus i-input",
                                    }),
                                  ]
                                ),
                              ]),
                            ]),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.course.curriculum == "K21 | Sekolah Penggerak"
                        ? _c("div", { staticClass: "form-group col-sm-6" }, [
                            _c("label", { staticClass: "mb-2" }, [
                              _vm._v("Bobot Penilaian"),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-secondary",
                                  on: {
                                    click: function ($event) {
                                      return _vm.downScore(
                                        "general_weight_edit"
                                      )
                                    },
                                  },
                                },
                                [_c("span", { staticClass: "fas fa-minus" })]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.componentEditForm.general_weight,
                                    expression:
                                      "componentEditForm.general_weight",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "number" },
                                domProps: {
                                  value: _vm.componentEditForm.general_weight,
                                },
                                on: {
                                  keyup: _vm.checkNum,
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.componentEditForm,
                                      "general_weight",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-secondary",
                                  on: {
                                    click: function ($event) {
                                      return _vm.upScore("general_weight_edit")
                                    },
                                  },
                                },
                                [
                                  _c("span", {
                                    staticClass: "fas fa-plus i-input",
                                  }),
                                ]
                              ),
                            ]),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-danger",
                        attrs: { slot: "button", type: "button" },
                        on: { click: _vm.showModalDeleteComponent },
                        slot: "button",
                      },
                      [_vm._v("Hapus")]
                    ),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.modalDeleteComponent
              ? _c(
                  "modal",
                  {
                    attrs: { deleteOpt: _vm.deleteComponent },
                    on: {
                      close: function ($event) {
                        _vm.modalDeleteComponent = false
                      },
                    },
                  },
                  [
                    _c("h5", { attrs: { slot: "header" }, slot: "header" }, [
                      _vm._v("Hapus Penilaian"),
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                      _c("span", [
                        _vm._v("Yakin akan menghapus data "),
                        _c("b", { staticClass: "text-capitalize" }, [
                          _vm._v(_vm._s(_vm.componentEditForm.title)),
                        ]),
                        _vm._v("? semua data yang terkait dengan "),
                        _c("b", { staticClass: "text-capitalize" }, [
                          _vm._v(_vm._s(_vm.componentEditForm.title)),
                        ]),
                        _vm._v(" akan ikut terhapus."),
                      ]),
                    ]),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.modalRedirect
              ? _c(
                  "modal",
                  {
                    on: {
                      close: function ($event) {
                        _vm.modalRedirect = false
                      },
                    },
                  },
                  [
                    _c("h5", { attrs: { slot: "header" }, slot: "header" }, [
                      _vm._v("Gagal!"),
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                      _c("span", [
                        _vm._v("Gagal membuka "),
                        _c("b", [_vm._v("halaman penilaian")]),
                        _vm._v(" dikarenakan tidak ditemukannya data "),
                        _c("b", [_vm._v("rombel")]),
                        _vm._v(" pada mata pelajaran "),
                        _c("b", { staticClass: "text-capitalize" }, [
                          _vm._v(
                            _vm._s(_vm.course.caption) +
                              " " +
                              _vm._s(_vm.course.entry_year_with_class)
                          ),
                        ]),
                        _vm._v(". Silahkan atur rombel pada halaman "),
                        _c("b", [_vm._v("Data Siswa")]),
                      ]),
                    ]),
                  ]
                )
              : _vm._e(),
          ],
          2
        )
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h5", { staticClass: "text-capitalize" }, [
        _vm._v("pengaturan dan komponen nilai pada rapor"),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-secondary" }, [
        _vm._v(
          "Bobot nilai dibawah akan menjadi acuan dalam perhitungan pada nilai akhir rapor"
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6 p-2 border" }, [
      _c("p", { staticClass: "text-secondary text-capitalize" }, [
        _vm._v("bobot nilai umum"),
      ]),
      _vm._v(" "),
      _c("h5", { staticClass: "text-center" }, [_vm._v("100%")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Predikat")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Skor Pembatas")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_dashboard_reportbooks_Students_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pagination.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pagination.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "paginationComponent",
  props: {
    pagination: {
      type: Object,
      required: true
    },
    offset: {
      type: Number,
      "default": 2
    },
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      inputPage: ""
    };
  },
  methods: {
    changePage: function changePage(page) {
      this.pagination.current_page = page;
      this.data.page = page;
      this.$emit('paginate', this.data);
    },
    changePerPage: function changePerPage(val) {
      this.pagination.per_page = val;
      this.data.per_page = val;
      this.$emit('paginate', this.data);
    },
    changePageByInput: function changePageByInput() {
      if (this.inputPage <= this.pagination.last_page) {
        this.pagination.current_page = this.inputPage;
        this.data.page = this.inputPage;
        this.$emit('paginate', this.data);
      }
    },
    dropDown: function dropDown() {
      var menu = document.getElementById('dropdown-menu');
      menu.classList.toggle('show');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Modal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Modal.vue */ "./resources/js/components/Modal.vue");
/* harmony import */ var _components_Pagination_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Pagination.vue */ "./resources/js/components/Pagination.vue");
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
// vuex
 // modal

 // pagination


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "allStudents",
  components: {
    "modal": _components_Modal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    "pagination": _components_Pagination_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      period: {},
      studentGroups: [],
      // modalUpdate: false,
      sortOpts: {
        enabled: true
      },
      rows: [],
      columns: [{
        label: "Nama",
        field: "name",
        filterOptions: {
          enabled: true
        }
      }, {
        label: "NIS",
        field: "nis",
        filterOptions: {
          enabled: true
        }
      }, {
        label: "Rombel",
        field: "student_group.name",
        filterOptions: {
          enabled: true
        }
      }, {
        label: "Lihat Rapor",
        field: "id",
        tdClass: "text-center",
        sortable: false
      }],
      teacherIds: [],
      role: null,
      regionId: null,
      pages: {
        total: 0,
        per_page: 20,
        from: 1,
        to: 0,
        current_page: 1,
        last_page: 1
      },
      payloadGet: {
        region: null,
        search: '',
        searchVal: '',
        page: 1,
        per_page: 20,
        field: "student_group_id",
        sort: "ASC"
      },
      withoutPagination: false
    };
  },
  created: function created() {
    this.getPeriod(this.$route.params.period);
    this.getStudents();
    this.getStudentGroups();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)(['errorMessage', 'errors', 'isLoading'])),
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)('reportPeriods', ['detail'])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)('students', ['indexWithSG', 'filterByRegion'])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)('studentGroups', ['getAll'])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)('reportbooks', ['createOne', 'checkStudent', 'edit'])), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)('regions', ['regionIdByTeacher'])), {}, {
    getPeriod: function getPeriod(id) {
      var _this = this;

      this.detail(id).then(function (result) {
        _this.period = result;
      });
    },
    getStudents: function getStudents() {
      var _this2 = this;

      var user = JSON.parse(localStorage.getItem('user_data'));
      var id = user.userable_id;
      this.role = user.role;

      if (this.role === 'ADMIN') {
        this.indexWithSG(this.payloadGet).then(function (result) {
          _this2.rows = [];

          if (result.per_page) {
            _this2.rows = result.data;
            _this2.pages.total = result.total;
            _this2.pages.per_page = result.per_page;
            _this2.pages.from = result.from;
            _this2.pages.to = result.to;
            _this2.pages.current_page = result.current_page;
            _this2.pages.last_page = result.last_page;
          } else {
            if (result.data.length > 1) {
              for (var i = 0; i < result.data.length; i++) {
                if (i == result.data.length - 1) {
                  _this2.rows.push(result.data[i][0]);
                } else {
                  _this2.rows.push(result.data[i]);
                }
              }
            } else {
              _this2.rows = result.data;
            }
          }
        });
      } else if (this.role === 'TEACHER') {
        this.regionIdByTeacher(id).then(function (result) {
          _this2.regionId = result[0].id;
          _this2.payloadGet.region = result[0].id;
          _this2.payloadGet.field = 'nis';

          _this2.filterByRegion(_this2.payloadGet).then(function (result) {
            _this2.rows = [];

            if (result.per_page) {
              _this2.rows = result.data;
              _this2.pages.total = result.total;
              _this2.pages.per_page = result.per_page;
              _this2.pages.from = result.from;
              _this2.pages.to = result.to;
              _this2.pages.current_page = result.current_page;
              _this2.pages.last_page = result.last_page;
            } else {
              if (result.data.length > 1) {
                for (var i = 0; i < result.data.length; i++) {
                  if (i == result.data.length - 1) {
                    _this2.rows.push(result.data[i][0]);
                  } else {
                    _this2.rows.push(result.data[i]);
                  }
                }
              } else {
                _this2.rows = result.data;
              }
            }
          });
        });
      }
    },
    updateParams: function updateParams(newProps) {
      this.pages = Object.assign({}, this.pages, newProps);
    },
    onColumnFilter: function onColumnFilter(params) {
      this.updateParams(params);

      if (!this.pages.columnFilters["name"] && !this.pages.columnFilters["nis"] && !this.pages.columnFilters["student_group.name"]) {
        this.payloadGet.search = "";
        this.payloadGet.searchVal = "";
        this.withoutPagination = false;
        this.getStudents();
      } else if (this.pages.columnFilters["name"]) {
        this.payloadGet.search = "name";
        this.payloadGet.searchVal = this.pages.columnFilters["name"];
        this.withoutPagination = false;
        this.getStudents();
      } else if (this.pages.columnFilters["nis"]) {
        this.payloadGet.search = "nis";
        this.payloadGet.searchVal = this.pages.columnFilters["nis"];
        this.withoutPagination = false;
        this.getStudents();
      } else if (this.pages.columnFilters["student_group.name"]) {
        this.payloadGet.search = "student_group";
        this.payloadGet.searchVal = this.pages.columnFilters["student_group.name"];
        this.withoutPagination = true;
        this.getStudents();
      }
    },
    onSortChange: function onSortChange(params) {
      if (params[0].type == "none") {
        this.payloadGet.field = "student_group_id";
        this.payloadGet.sort = "ASC";
      } else if (params[0].field == "student_group.name") {
        this.payloadGet.field = "student_group_id";
        this.payloadGet.sort = params[0].type;
      } else {
        this.payloadGet.field = params[0].field;
        this.payloadGet.sort = params[0].type;
      }

      this.getStudents();
    },
    getStudentGroups: function getStudentGroups() {
      var _this3 = this;

      this.getAll().then(function (result) {
        _this3.studentGroups = result;
      });
    },
    redirectPage: function redirectPage(e) {
      var studentGroup = e.target.value;
      this.$router.push({
        name: 'reportbooks.periods.students.absence',
        params: {
          page: 7,
          period: this.$route.params.period,
          group: studentGroup,
          region: 0
        }
      });
    },
    checkStudentExist: function checkStudentExist(student) {
      var _this4 = this;

      this.checkStudent(student).then(function (result) {
        if (result.length < 1) {
          var payload = {
            reportPeriodId: _this4.period.id,
            studentId: student
          };

          _this4.createOne(payload).then(function (result) {
            _this4.$router.push({
              name: 'reportbooks.periods.students.report',
              params: {
                page: 7,
                period: _this4.$route.params.period,
                student: student
              }
            });
          });
        } else {
          var payloadEdit = {
            id: result[0].id,
            data: {}
          };

          _this4.edit(payloadEdit).then(function (result) {
            _this4.$router.push({
              name: 'reportbooks.periods.students.report',
              params: {
                page: 7,
                period: _this4.$route.params.period,
                student: student
              }
            });
          });
        }
      });
    } // updateTemplate() {
    //     console.log('edit');
    // }

  })
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=style&index=0&id=4b7ecbf5&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=style&index=0&id=4b7ecbf5&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nh5.title[data-v-4b7ecbf5] {\n    font-weight: 600 !important;\n    font-size: 1.3rem;\n    margin-top: 20px;\n}\n.row[data-v-4b7ecbf5] {\n    margin-top: 30px;\n}\nh4[data-v-4b7ecbf5] {\n    font-weight: 600;\n    font-size: 1rem;\n}\na.router[data-v-4b7ecbf5] {\n    text-decoration: none !important;\n    color: #000 !important;\n}\n.w-20[data-v-4b7ecbf5] {\n    width: 20%;\n}\n.btn.bg-blue1[data-v-4b7ecbf5] {\n    margin-right: 1rem !important;\n}\n.btn-outline-blue[data-v-4b7ecbf5] {\n    border: 1px solid #182A36;\n    color: #182A36 !important;\n}\nspan.fas.fa-pen[data-v-4b7ecbf5] {\n    margin-right: 5px;\n}\n.cursor-pointer[data-v-4b7ecbf5] {\n    cursor: pointer;\n}\n@media (max-width: 575px) {\nh5.title[data-v-4b7ecbf5] {\n        font-size: 1rem;\n}\nh4[data-v-4b7ecbf5] {\n        font-size: 0.9rem;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=style&index=0&id=4b7ecbf5&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=style&index=0&id=4b7ecbf5&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_style_index_0_id_4b7ecbf5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Students.vue?vue&type=style&index=0&id=4b7ecbf5&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=style&index=0&id=4b7ecbf5&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_style_index_0_id_4b7ecbf5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_style_index_0_id_4b7ecbf5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Pagination.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Pagination.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_vue_vue_type_template_id_d7acf176_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=d7acf176&scoped=true& */ "./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176&scoped=true&");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js& */ "./resources/js/components/Pagination.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pagination_vue_vue_type_template_id_d7acf176_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Pagination_vue_vue_type_template_id_d7acf176_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d7acf176",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pagination.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/dashboard/reportbooks/Students.vue":
/*!***************************************************************!*\
  !*** ./resources/js/pages/dashboard/reportbooks/Students.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Students_vue_vue_type_template_id_4b7ecbf5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Students.vue?vue&type=template&id=4b7ecbf5&scoped=true& */ "./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=template&id=4b7ecbf5&scoped=true&");
/* harmony import */ var _Students_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Students.vue?vue&type=script&lang=js& */ "./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=script&lang=js&");
/* harmony import */ var _Students_vue_vue_type_style_index_0_id_4b7ecbf5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Students.vue?vue&type=style&index=0&id=4b7ecbf5&scoped=true&lang=css& */ "./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=style&index=0&id=4b7ecbf5&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Students_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Students_vue_vue_type_template_id_4b7ecbf5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Students_vue_vue_type_template_id_4b7ecbf5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4b7ecbf5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/dashboard/reportbooks/Students.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pagination.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Pagination.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pagination.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Students.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=style&index=0&id=4b7ecbf5&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=style&index=0&id=4b7ecbf5&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_style_index_0_id_4b7ecbf5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Students.vue?vue&type=style&index=0&id=4b7ecbf5&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=style&index=0&id=4b7ecbf5&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_d7acf176_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_d7acf176_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_d7acf176_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pagination.vue?vue&type=template&id=d7acf176&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=template&id=4b7ecbf5&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=template&id=4b7ecbf5&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_template_id_4b7ecbf5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_template_id_4b7ecbf5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_template_id_4b7ecbf5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Students.vue?vue&type=template&id=4b7ecbf5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=template&id=4b7ecbf5&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "nav",
    {
      staticClass: "d-flex justify-content-between",
      attrs: { "aria-label": "Page navigation example" },
    },
    [
      _c("div", { staticClass: "dropdown dropright" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-white dropdown-toggle",
            staticStyle: { "font-size": "0.9rem" },
            attrs: {
              href: "#",
              role: "button",
              "data-toggle": "dropdown",
              "aria-haspopup": "true",
              "aria-expanded": "false",
            },
            on: { click: _vm.dropDown },
          },
          [_vm._v("\n            Rows per page\n        ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "dropdown-menu",
            attrs: {
              id: "dropdown-menu",
              "aria-labelledby": "dropdownMenuLink",
            },
          },
          [
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "#" },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.changePerPage(10)
                  },
                },
              },
              [_vm._v("10")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "#" },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.changePerPage(25)
                  },
                },
              },
              [_vm._v("25")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "#" },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.changePerPage(50)
                  },
                },
              },
              [_vm._v("50")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "#" },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.changePerPage(75)
                  },
                },
              },
              [_vm._v("75")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "#" },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.changePerPage(100)
                  },
                },
              },
              [_vm._v("100")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "#" },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.changePerPage(150)
                  },
                },
              },
              [_vm._v("150")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "#" },
                on: {
                  click: function ($event) {
                    $event.preventDefault()
                    return _vm.changePerPage(_vm.pagination.total)
                  },
                },
              },
              [_vm._v("all")]
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "pagination" }, [
        _c("li", { staticClass: "page-item" }, [
          _c(
            "div",
            { staticClass: "pt-1", staticStyle: { "margin-right": "8px" } },
            [
              _c("span", [
                _vm._v(
                  _vm._s(_vm.pagination.current_page) +
                    " of " +
                    _vm._s(_vm.pagination.last_page) +
                    " page"
                ),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _vm.pagination.current_page > 1
          ? _c("li", { staticClass: "page-item" }, [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: { href: "#", "aria-label": "Previous" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.changePage(_vm.pagination.current_page - 1)
                    },
                  },
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("Prev"),
                  ]),
                ]
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("li", { staticClass: "page-item" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.inputPage,
                expression: "inputPage",
              },
            ],
            staticClass: "form-control",
            staticStyle: { width: "80px", height: "33px", margin: "0 10px" },
            attrs: { type: "number", id: "inputPage" },
            domProps: { value: _vm.inputPage },
            on: {
              input: [
                function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.inputPage = $event.target.value
                },
                function ($event) {
                  $event.preventDefault()
                  return _vm.changePageByInput.apply(null, arguments)
                },
              ],
            },
          }),
        ]),
        _vm._v(" "),
        _vm.pagination.current_page < _vm.pagination.last_page
          ? _c("li", { staticClass: "page-item" }, [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: { href: "#", "aria-label": "Next" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.changePage(_vm.pagination.current_page + 1)
                    },
                  },
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }, [
                    _vm._v("Next"),
                  ]),
                ]
              ),
            ])
          : _vm._e(),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=template&id=4b7ecbf5&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/dashboard/reportbooks/Students.vue?vue&type=template&id=4b7ecbf5&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mt-2" }, [
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
          _vm._v("\n    " + _vm._s(_vm.errorMessage) + "\n    "),
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.isLoading
      ? _c("div", [
          _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
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
                          name: "reportbooks.periods",
                          params: { page: 7 },
                        },
                      },
                    },
                    [
                      _c("a", { attrs: { href: "#" } }, [
                        _vm._v("Periode Rapor"),
                      ]),
                    ]
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
                    _vm._s(_vm.period.title + " - " + _vm.period.school_year)
                  ),
                ]
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("h5", { staticClass: "title" }, [_vm._v("Rapor per Siswa")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex flex-wrap justify-content-between mt-4" },
            [
              _c(
                "div",
                [
                  this.role === "ADMIN"
                    ? _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "reportbooks.periods.attitude.components",
                              params: {
                                page: 7,
                                period: _vm.$route.params.period,
                              },
                            },
                          },
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "btn bg-blue1 text-white text-capitalize",
                              attrs: { href: "#" },
                            },
                            [_vm._v("atur komponen nilai sikap")]
                          ),
                        ]
                      )
                    : _vm._e(),
                ],
                1
              ),
              _vm._v(" "),
              this.role === "ADMIN"
                ? _c(
                    "select",
                    {
                      staticClass: "form-select btn bg-blue1 text-white w-auto",
                      on: { change: _vm.redirectPage },
                    },
                    [
                      _c("option", { attrs: { selected: "", hidden: "" } }, [
                        _vm._v("Atur Kehadiran Siswa"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.studentGroups, function (group, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: group.id } },
                          [_vm._v(_vm._s(group.name))]
                        )
                      }),
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              this.role === "TEACHER"
                ? _c(
                    "router-link",
                    {
                      staticClass: "btn bg-blue1 text-white",
                      attrs: {
                        to: {
                          name: "reportbooks.periods.students.absence",
                          params: {
                            page: 7,
                            period: _vm.$route.params.period,
                            group: 0,
                            region: _vm.regionId,
                          },
                        },
                      },
                    },
                    [_vm._v("\n            Atur Kehadiran Siswa\n        ")]
                  )
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive mt-3" }, [
            _c("table", { staticClass: "table table-borderless" }, [
              _c("tbody", [
                _c(
                  "tr",
                  [
                    _c("vue-good-table", {
                      attrs: {
                        mode: "remote",
                        columns: _vm.columns,
                        rows: _vm.rows,
                        "pagination-options": { enabled: false },
                        "sort-options": _vm.sortOpts,
                        "fixed-header": true,
                        "line-numbers": true,
                        "max-height": "800px",
                        styleClass: "vgt-table condensed striped",
                      },
                      on: {
                        "on-sort-change": _vm.onSortChange,
                        "on-column-filter": _vm.onColumnFilter,
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "table-row",
                            fn: function (props) {
                              return [
                                props.column.field === "id"
                                  ? _c("span", [
                                      _c("i", {
                                        staticClass:
                                          "fas fa-expand text-dark cursor-pointer",
                                        on: {
                                          click: function ($event) {
                                            return _vm.checkStudentExist(
                                              props.row.id
                                            )
                                          },
                                        },
                                      }),
                                    ])
                                  : _vm._e(),
                              ]
                            },
                          },
                        ],
                        null,
                        false,
                        4153954508
                      ),
                    }),
                    _vm._v(" "),
                    !_vm.withoutPagination
                      ? _c("pagination", {
                          staticClass: "mt-3",
                          attrs: {
                            pagination: _vm.pages,
                            offset: 2,
                            data: _vm.payloadGet,
                          },
                          on: { paginate: _vm.getStudents },
                        })
                      : _vm._e(),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
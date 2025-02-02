<template>
    <div class="mt-3">
        <div class="loader" v-if="isLoading"></div>
        <div v-if="isLoading" class="w-100 card-loading">
            <img src="/assets/img/loading.png" alt="loading" class="d-block m-auto">
        </div>
        <div class="alert alert-danger my-3" v-if="errorMessage">
        {{ errorMessage }}
        </div>
        <div v-if="!isLoading">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link v-bind:to="{ name: 'batches', params: {page: 4} }"><a href="#">data siswa</a></router-link></li>
                <li class="breadcrumb-item"><router-link v-bind:to="{ name: 'student_groups', params: {page: 4, batch: $route.params.batch} }"><a href="#">{{batchName}}</a></router-link></li>
                <li class="breadcrumb-item active" aria-current="page" @click="modalEdit = true">{{studentGroup}} <span class="fas fa-pen"></span></li>
            </ol>
        </nav>

        <div class="row my-3">
            <div class="col-12">
                <a href="#" class="btn btn-primary btn-block mt-md-1" @click="modalAddStudent = true">
                    <span class="fas fa-plus"></span> Tambah Siswa
                </a>
            </div>
        </div>

        <div class="row mt-2 d-flex justify-content-center">
            <div class="col-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Data siswa rombel {{studentGroup}}</h4>
                        <p class="card-description">{{batchName}}</p>
                        <div class="table-responsive">
                            <table class="table table-borderless">
                                <tbody>
                                <tr>
                                <vue-good-table
                                    mode="remote"
                                    :columns="columns"
                                    :rows="rows"
                                    :pagination-options="{enabled: false}"
                                    @on-sort-change="onSortChange"
                                    @on-column-filter="onColumnFilter"
                                    :sort-options="sortOpts"
                                    :fixed-header="true"
                                    :line-numbers="true"
                                    max-height="800px"
                                    styleClass="vgt-table condensed striped"
                                >
                                    <template slot="table-row" slot-scope="props">
                                    <span v-if="props.column.field === 'id'">
                                        <a
                                        href="#"
                                        title="Edit Siswa"
                                        @click="showStudent(props.row.id)"
                                        >
                                        <label class="badge bg-green1 text-white">Edit</label>
                                        </a>
                                    </span>
                                    </template>
                                </vue-good-table>
                                <pagination class="mt-3" :pagination="pages" @paginate="getStudents" :offset="2" :data="payloadGet"></pagination>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- modal -->
        <modal v-if="modalEdit" @close="modalEdit = false" :action="editStudentGroup">
            <h5 slot="header">Edit Rombel</h5>
            <div slot="body">
                <div class="alert alert-danger mb-3" v-if="errorMessage">
                    {{ errorMessage }}
                </div>
                <div class="form-group">
                    <label class="mb-2">Jurusan</label>
                    <select2 :options="majors" :reduce="major => major.id" label="abbreviation" v-model="editForm.major_id" :class="{'is-invalid': errors.major_id}"></select2>
                    <div class="invalid-feedback" v-if="errors.major_id">
                        {{ errors.major_id[0] }}
                    </div>
                </div>
                <div class="form-group">
                    <label class="mb-2">Nama Rombel</label>
                    <input type="text" class="form-control" v-model="editForm.name" :class="{'is-invalid': errors.name}" placeholder="RPL XII-2">
                    <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-outline-danger" slot="button" @click="showModalDeleteStudentGroup">Hapus</button>
        </modal>

        <modal v-if="modalDeleteStudentGroup" @close="modalDeleteStudentGroup = false" :deleteOpt="deleteStudentGroup">
            <h5 slot="header">Hapus Rombel</h5>
            <div slot="body">
                <span><b>Semua data</b> yang berkaitan dengan <b class="text-capitalize">{{studentGroup}}</b> juga akan <b>terhapus</b> dan <b>tidak dapat diakses kembali</b>. Yakin tetap menghapus data <b class="text-capitalize">{{studentGroup}}</b>?</span>
            </div>
        </modal>

        <modal v-if="modalEditStudent" @close="modalEditStudent = false" :action="editStudent">
            <h5 slot="header">Edit Siswa</h5>
            <div slot="body">
                <div class="alert alert-danger mb-3" v-if="errorMessage">
                    {{ errorMessage }}
                </div>
                <div class="form-group">
                    <label class="mb-2">Nama</label>
                    <input type="text" class="form-control" v-model="studentEditForm.name" :class="{'is-invalid': errors.name}" placeholder="Levi Ackerman">
                    <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                    </div>
                </div>
                <div class="form-group">
                    <label class="mb-2">NIS</label>
                    <input type="number" class="form-control" v-model="studentEditForm.nis" :class="{'is-invalid': errors.nis}">
                    <div class="invalid-feedback" v-if="errors.nis">
                        {{ errors.nis[0] }}
                    </div>
                </div>
                <div class="form-group">
                    <label class="mb-2">NISN</label>
                    <input type="number" class="form-control" v-model="studentEditForm.nisn" :class="{'is-invalid': errors.nisn}">
                    <div class="invalid-feedback" v-if="errors.nisn">
                        {{ errors.nisn[0] }}
                    </div>
                </div>
                <div class="form-group">
                    <label class="mb-2">Jenis Kelamin</label>
                    <small class="text-danger" v-if="errors.jk">
                        {{ errors.jk[0] }}
                    </small>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="Laki-Laki" v-model="studentEditForm.jk" id="male">
                        <label class="form-check-label text-capitalize" for="male">Laki-Laki</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="Perempuan" v-model="studentEditForm.jk" id="female">
                        <label class="form-check-label text-capitalize" for="female">Perempuan</label>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-outline-danger" slot="button" @click="showModalDeleteStudent">Hapus</button>
        </modal>

        <modal v-if="modalAddStudent" @close="modalAddStudent = false" :action="addStudent">
            <h5 slot="header">Tambah Siswa</h5>
            <div slot="body">
                <div class="alert alert-danger mb-3" v-if="errorMessage">
                    {{ errorMessage }}
                </div>
                <div class="form-group">
                    <label class="mb-2">Nama</label>
                    <input type="text" class="form-control" v-model="studentAddForm.name" :class="{'is-invalid': errors.name}" placeholder="Levi Ackerman">
                    <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                    </div>
                </div>
                <div class="form-group">
                    <label class="mb-2">NIS</label>
                    <input type="number" class="form-control" v-model="studentAddForm.nis" :class="{'is-invalid': errors.nis}">
                    <div class="invalid-feedback" v-if="errors.nis">
                        {{ errors.nis[0] }}
                    </div>
                </div>
                <div class="form-group">
                    <label class="mb-2">NISN</label>
                    <input type="number" class="form-control" v-model="studentAddForm.nisn" :class="{'is-invalid': errors.nisn}">
                    <div class="invalid-feedback" v-if="errors.nisn">
                        {{ errors.nisn[0] }}
                    </div>
                </div>
                <div class="form-group">
                    <label class="mb-2">Jenis Kelamin</label>
                    <small class="text-danger" v-if="errors.jk">
                        {{ errors.jk[0] }}
                    </small>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="Laki-Laki" v-model="studentAddForm.jk" id="male">
                        <label class="form-check-label text-capitalize" for="male">Laki-Laki</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="Perempuan" v-model="studentAddForm.jk" id="female">
                        <label class="form-check-label text-capitalize" for="female">Perempuan</label>
                    </div>
                </div>
            </div>
        </modal>

        <modal v-if="modalDeleteStudent" @close="modalDeleteStudent = false" :deleteOpt="deleteStudent">
            <h5 slot="header">Hapus Siswa</h5>
            <div slot="body">
                <span><b>Semua data</b> siswa <b class="text-capitalize">{{studentEditForm.name}} - {{studentEditForm.nis}}</b> akan <b>terhapus</b> dan <b>tidak dapat diakses kembali</b>. Yakin tetap menghapus siswa <b class="text-capitalize">{{studentEditForm.name}} - {{studentEditForm.nis}}</b> beserta datanya?</span>
            </div>
        </modal>
        </div>
    </div>
</template>

<script>
// vuex
import {mapActions, mapMutations, mapGetters, mapState} from 'vuex';
// modal
import modalComponent from '../../../components/Modal.vue';
// pagination
import paginateComponent from '../../../components/Pagination.vue';
// vue-select
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
    name: "studentData",
    components: {
        "modal": modalComponent,
        "select2": vSelect,
        "pagination": paginateComponent
    },
    data() {
        return {
            batchName: null,
            studentGroup: null,
            majors: [],
            editForm: {},
            batch: {},
            modalEdit: false,
            modalDeleteStudentGroup: false,
            pages: {
                total: 0,
                per_page: 20,
                from: 1,
                to: 0,
                current_page: 1,
                last_page: 1,
            },
            payloadGet: {
                studentGroup: this.$route.params.group,
                search: '',
                searchVal: '',
                page: 1,
                per_page: 20,
                field:"nis",
                sort:"ASC"
            },
            rows: [],
            columns: [
                {
                    label: "NIS",
                    field: "nis",
                    filterOptions: { enabled: true },
                },
                {
                    label: "NISN",
                    field: "nisn",
                    filterOptions: { enabled: true },
                },
                {
                    label: "Nama",
                    field: "name",
                    filterOptions: { enabled: true },
                },
                {
                    label: "Jenis Kelamin",
                    field: "jk",
                    filterOptions: { enabled: true },
                },
                {
                    label: "Aksi",
                    field: "id",
                    tdClass: "text-center",
                    sortable: false,
                },
            ],
            sortOpts: { enabled: true },
            modalDeleteStudent: false,
            studentEditForm: {},
            modalEditStudent: false,
            modalAddStudent: false,
            studentAddForm: {
                name: null,
                nis: null,
                nisn: null,
                jk: null,
                student_group_id: this.$route.params.group,
            }
        }
    },
    created() {
        this.getMajors();
        this.showStudentGroup(this.$route.params.group);
        this.showBatch(this.$route.params.batch);
        this.getStudents(this.payloadGet);
    },
    computed: {
        ...mapState(['errorMessage', 'errors', 'isLoading']),
    },
    methods: {
        ...mapActions('majors', ['allData']),
        ...mapActions('studentGroups', ['detailStudentGroup', 'edit', 'deleteStudentGroupCascade']),
        ...mapActions('batches', ['show']),
        ...mapActions('students', ['create', 'index', 'studentDetail', 'update', 'deleteStudentUser']),

        getMajors() {
            this.allData().then((result) => {
                this.majors = result;
            })
        },
        showStudentGroup(id) {
            this.detailStudentGroup(id).then((result) => {
                this.editForm = result;
                this.studentGroup = result.name;
            })
        },
        editStudentGroup() {
            let payload = {id: this.$route.params.group, data: this.editForm};
            this.edit(payload).then((result) => {
                this.modalEdit = false;
                this.showStudentGroup(result.id);
            })
        },
        showModalDeleteStudentGroup() {
            this.modalEdit = false;
            this.modalDeleteStudentGroup = true;
        },
        deleteStudentGroup() {
            let payload = this.$route.params.group;

            this.deleteStudentGroupCascade(payload).then((result) => {
                this.modalDeleteStudentGroup = false;
            })
        },
        showBatch(id) {
            this.show(id).then((result) => {
                this.batch = result;
                this.batchName = result.batch_name;
            })
        },
        getStudents(payload) {
            this.index(payload).then((result) => {
                this.rows = result.data;
                this.pages.total = result.total;
                this.pages.per_page = result.per_page;
                this.pages.from = result.from;
                this.pages.to = result.to;
                this.pages.current_page = result.current_page;
                this.pages.last_page = result.last_page;
            })
        },
        updateParams(newProps) {
            this.pages = Object.assign({}, this.pages, newProps);
        },
        onColumnFilter(params) {
            this.updateParams(params);
            if(!this.pages.columnFilters["name"] && !this.pages.columnFilters["nis"] && !this.pages.columnFilters["nisn"] && !this.pages.columnFilters["jk"]){
                this.payloadGet.search = "";
                this.payloadGet.searchVal = "";
                this.getStudents(this.payloadGet);
            }
            else if(this.pages.columnFilters["name"]){
                this.payloadGet.search = "name";
                this.payloadGet.searchVal = this.pages.columnFilters["name"];
                this.getStudents(this.payloadGet);
            }
            else if(this.pages.columnFilters["nis"]){
                this.payloadGet.search = "nis";
                this.payloadGet.searchVal = this.pages.columnFilters["nis"];
                this.getStudents(this.payloadGet);
            }
            else if(this.pages.columnFilters["nisn"]){
                this.payloadGet.search = "nisn";
                this.payloadGet.searchVal = this.pages.columnFilters["nisn"];
                this.getStudents(this.payloadGet);
            }
            else if(this.pages.columnFilters["jk"]){
                this.payloadGet.search = "jk";
                this.payloadGet.searchVal = this.pages.columnFilters["jk"];
                this.getStudents(this.payloadGet);
            }
        },
        onSortChange(params) {
            if(params[0].type == "none"){
                this.payloadGet.field = "nis";
                this.payloadGet.sort = "ASC";
            }else{
                this.payloadGet.field = params[0].field;
                this.payloadGet.sort = params[0].type;
            }
            this.getStudents(this.payloadGet);
        },
        showModalDeleteStudent() {
            this.modalEditStudent = false;
            this.modalDeleteStudent = true;
        },
        showStudent(id) {
            this.studentDetail(id).then((result) => {
                this.studentEditForm = result;
                this.modalEditStudent = true;
            })
        },
        editStudent() {
            let payload = {id: this.studentEditForm.id, data: this.studentEditForm};
            this.update(payload).then((result) => {
                this.modalEditStudent = false;
                this.getStudents(this.payloadGet);
            })
        },
        addStudent() {
            this.create(this.studentAddForm).then((result) => {
                this.studentAddForm.name = null;
                this.studentAddForm.nis = null;
                this.studentAddForm.nisn = null;
                this.studentAddForm.jk = null;
                this.modalAddStudent = false;
                this.getStudents(this.payloadGet);
            })
        },
        deleteStudent() {
            let payload = this.studentEditForm.id;

            this.deleteStudentUser(payload).then((result) => {
                this.modalDeleteStudentGroup = false;
                this.modalDeleteStudent = false;
                this.getStudents(this.payloadGet);
            })
        },
    }
}
</script>

<style scoped>
.form-group {
    margin-bottom: 10px;
}

.btn-outline-muted {
    color: #535353;
    border-color: #B4ADAD;
    border-radius: 0px !important;
}

.btn-secondary {
    margin-left: 10px !important;
}

/* table */
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background-color: #fff;
    border: 1px solid #d2d2dc;
    border-radius: 0;
}

.card .card-title {
    color: #000;
    margin-bottom: 10px;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 600;
}

.card .card-description {
    color: #B4ADAD;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
}

.badge {
    border-radius: 0;
    font-size: 14px;
    line-height: 1;
    padding: 0.3rem 0.5rem;
    font-weight: normal;
    cursor: pointer;
}

@media (max-width: 575px) {
    .btn, .input-text {
        font-size: 0.8rem !important;
    }
    .btn {
        padding: 0.2rem 0.5rem !important;
    }
}
</style>

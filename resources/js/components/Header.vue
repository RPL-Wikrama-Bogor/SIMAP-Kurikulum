<template>
    <header class="header header-md shadow" id="header">
        <div class="header_toggle"><i class="fas fa-bars" id="header-toggle" @click="toggleSidebar"></i></div>
        <div class="header_text text-capitalize">{{title}}</div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            title: 'dashboard'
        }
    },
    watch: {
        '$route.params.page': {
            handler: function() {
                this.changeTitle();
            },
            deep: true,
            immediate: true
        }
    },
    methods: {
        changeTitle() {
            if(this.$route.params.page == 2) {
                this.title = 'mata pelajaran';
            } else if(this.$route.params.page == 1) {
                this.title = 'guru';
            } else if(this.$route.params.page == 3) {
                this.title = 'periode rapor';
            } else if(this.$route.params.page == 4) {
                this.title = 'data siswa';
            } else if(this.$route.params.page == 5) {
                this.title = 'pelajaran';
            } else if(this.$route.params.page == 6) {
                this.title = 'buku nilai';
            } else if(this.$route.params.page == 7) {
                this.title = 'rapor siswa';
            } else if(this.$route.params.page == 8) {
                this.title = 'rayon';
            } else if(this.$route.params.page == 9) {
                this.title = 'cetak rapor';
            } else {
                this.title = 'dashboard';
            }
        },
        toggleSidebar() {
            const toggle = document.getElementById('header-toggle');
            const nav = document.getElementById('nav-bar');
            const bodypd = document.getElementById('body-pd');
            const headerpd = document.getElementById('header');
            // show navbar
            nav.classList.toggle('show');
            // change icon
            toggle.classList.toggle('fa-times');
            toggle.classList.toggle('fa-bars');
            // add padding to body
            bodypd.classList.toggle('body-pd');
            // add padding to header
            headerpd.classList.toggle('header-pd');
            headerpd.classList.toggle('header-md');
        }
    }
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 3rem;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: #fff;
    z-index: 100;
    transition: .5s;
}

.header_toggle {
    color: #182A36;
    font-size: 1rem;
    cursor: pointer;
}

.header_text {
    font-size: 1rem;
    margin-left: 1rem;
}

.header-pd {
    padding: 0 2rem 0 calc(48px + 12rem);
}

.header-md {
    padding: 0 2rem 0 calc(48px + 2rem);
}

@media screen and (min-width: 768px) {
    .header {
        height: calc(3rem + 1rem);
    }
}

@media screen and (max-width: 768px) {
    .header-md {
        padding: 0 2rem;
    }

    .header-pd {
        padding: 0 2rem 0 5rem;
    }
}
</style>
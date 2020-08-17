<template>
    <div>
        <Header/>
        <div style="padding-top: 65px">
            <router-view></router-view>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import { mapGetters, mapMutations} from 'vuex';
    import Header from '@/components/partials/Header.vue';
    import Footer from '@/components/partials/Footer.vue';

    export default {
        name: 'Home',

        components: {
            Header,
            Footer,
        },

        data() {
            return {};
        },

        created() {
            this.testVuex();
        },

        computed: {
            ...mapGetters(['token']),
        },

        methods: {
            ...mapMutations['createToken'],

            testVuex() {
                this.$services.auth.test().then(() => {})
                this.$store.commit('createToken', Math.floor(Math.random() * 100))
            }
        }
    }
</script>
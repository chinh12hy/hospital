<template>
    <div class="header">
        <Menu/>
    </div>
</template>

<script>
    import Menu from '@/components/partials/Menu.vue';
    export default {
        name: 'Header',

        components: {
            Menu,
        },

        created() {
            this.test();
        },

        methods: {
            test() {
                console.log('process', process.env)
            }
        }
    }
</script>

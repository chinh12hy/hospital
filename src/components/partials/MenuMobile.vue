<template>
    <nav class="menu-mobile"
         id="menu-mobile">
        <ul class="menu-mobile-list">
            <li v-for="(item, index) in menuOptions"
                :key="index">
                <router-link :to="{ name: item.url}"
                             :class="{ 'active' : item.value === isActiveMenu}"
                             class="menu-mobile-item text-normal">
                    {{ item.label }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'MenuMobile',

        data() {
            return {
                menuOptions: [
                    {
                        label: 'Trang chủ',
                        value: 'dashboard',
                        url: 'Home'
                    },
                    {
                        label: 'Phòng ban',
                        value: 'department',
                        url: 'department'
                    },
                    {
                        label: 'Bài viết',
                        value: 'Posts',
                        url: 'Posts'
                    },
                    {
                        label: 'Tài khoản',
                        value: 'UsersManagement',
                        url: 'UsersManagement'
                    },
                    {
                        label: 'Đăng nhập',
                        value: 'Login',
                        url: 'Login'
                    }
                ]
            }
        },

        computed: {
            isActiveMenu() {
                return this.$route.name;
            }
        },

        watch: {
            $route() {
                const navMobile = document.getElementById('menu-mobile');
                navMobile.classList.remove('show-menu');
            }
        }
    }
</script>

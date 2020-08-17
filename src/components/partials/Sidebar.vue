<template>
    <div>
        <div class="flex-column"
             id="sidebar-container">
            <router-link v-for="(item, index) in menuOptions"
                         :key="index" :to="item.url"
                         class="sidebar-item"
                         :class="{'active' : item.value === 'home'}">
                <Icon type="md-document" />
                {{item.label}}
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Sidebar',
        data () {
            return {
                isCollapsed: false,
                menuOptions: [
                    {
                        label: 'Home',
                        value: 'home',
                        url: '/'
                    },
                    {
                        label: 'Danh sách khóa học',
                        value: 'course',
                        url: '/course-manager'
                    },
                    {
                        label: 'Login',
                        value: 'login',
                        url: '/login'
                    }
                ]
            }
        }
    }
</script>
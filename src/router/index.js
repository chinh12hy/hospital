import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';
import Register from '@/pages/Register.vue';
import Posts from '@/pages/Posts.vue';
import PostDetail from '@/pages/PostDetail.vue';
import Department from '@/pages/Department.vue';
import DepartmentDetail from '@/pages/DepartmentDetail.vue';
import Home from '@/pages/Home.vue';
import CourseManagement from '@/pages/admin/CourseManagement.vue';
import UsersManagement from '@/pages/admin/UsersManagement.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            // redirect: '/course-management',
            children: [
                {
                    path: '/',
                    name: 'CourseManagement',
                    component: CourseManagement,
                },
                {
                    path: '/course-management',
                    name: 'CourseManagement',
                    component: CourseManagement,
                },
                {
                    path: '/users-management',
                    name: 'UsersManagement',
                    component: UsersManagement,
                },
                {
                    path: '/posts',
                    name: 'Posts',
                    component: Posts,
                },
                {
                    path: '/posts/:id',
                    name: 'PostDetail',
                    component: PostDetail,
                },
                {
                    path: '/department',
                    name: 'department',
                    component: Department,
                },
                {
                    path: '/department/:id',
                    name: 'department-detail',
                    component: DepartmentDetail,
                },
            ],
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '*',
            redirect: '/'
        },
    ]
})
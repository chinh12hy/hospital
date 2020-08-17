import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import HomePage from '@/components/HomePage';
import CourseDetail from '@/components/Course/CourseDetail.vue';
import Login from '@/pages/Login';
import CourseManager from '@/pages/CourseManager';
import Register from '@/pages/Register.vue';
import HomeAdmin from '@/pages/admin/HomeAdmin.vue';
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
            children: [
                {
                    path: '/',
                    name: 'HomePage',
                    component: HomePage,
                },
                {
                    path: '/course-manager',
                    name: 'CourseManager',
                    component: CourseManager,
                },
                {
                    path: '/course-manager/:id',
                    name: 'CourseDetail',
                    component: CourseDetail,
                },
            ]
        },
        {
            path: '/home-admin',
            name: 'HomeAdmin',
            component: HomeAdmin,
            redirect: '/home-admin/course-management',
            children: [
                {
                    path: '/home-admin/course-management',
                    name: 'CourseManagement',
                    component: CourseManagement,
                },
                {
                    path: '/home-admin/users-management',
                    name: 'UsersManagement',
                    component: UsersManagement,
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
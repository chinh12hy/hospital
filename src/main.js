import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import ViewUI from 'view-design';
import locale from 'view-design/dist/locale/en-US';
import 'view-design/dist/styles/iview.css';
import './assets/less/app.less';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'
import CKEditor from '@ckeditor/ckeditor5-vue';
import axios from 'axios';
import Filters from './filters';
import { API } from './config';
import services from './services';
import './registerServiceWorker'

Vue.use( CKEditor );
Vue.use( Filters );
Vue.use(ViewUI, { locale });
Vue.config.productionTip = false;
const token = localStorage.getItem('token');
const instance = axios.create({
  headers: {
    Accept: 'application/json',
    'Authorization': token ? `Bearer ${token}` : ''
  }
});
Vue.prototype.$api = API;
Vue.prototype.$axios = instance;
Vue.prototype.$services = services;
Vue.http.interceptors.push((request, next) => {
    const TOKEN = localStorage.getItem('/token');
    request.headers.set('authorization', TOKEN ? `Bearer ${JSON.parse(TOKEN)}` : '');

    // GET
    if (request.method === 'GET') {
        // Change pagination.size to pagination.limit
        if (request.params.size) {
            request.params.limit = request.params.size;
            delete request.params.size;
        }

        // Change pagination.page to pagination.offset
        if (request.params.page) {
            request.params.offset = (request.params.page - 1) * request.params.limit;
            delete request.params.page;
        }
    }

    // POST
    if (request.method === 'POST') {
        if (request.url === 'api/users/') {
            if (request.body.role === 'ADMIN') {
                request.body.groups = [1];
            } else if (request.body.role === 'MOD') {
                request.body.groups = [2];
            } else {
                request.body.groups = [3];
            }
            delete request.body.role;
        }
    }

    next();

    return (response) => {
        if (response.status === 401) {
            localStorage.clear();
            location.href = '/login';
        }
    };
});
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

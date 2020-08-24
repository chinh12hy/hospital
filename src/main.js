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
import _ from 'lodash';
import ECharts from 'vue-echarts';
import Filters from './filters';
import { API } from './config';
import services from './services';
import './registerServiceWorker';
import GoogleAuth from '@/config/google.js';

import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/lines';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend/ScrollableLegendView';

const gauthOption = {
    clientId: '244376640722-ugp7doftu62fb13v9mv6ddbul8s1sju8.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)

Vue.use( CKEditor );
Vue.use( Filters );
Vue.use(ViewUI, { locale });
Vue.config.productionTip = false;
Vue.http.options.root = 'http://chinh.com/root/';
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
Vue.prototype.$lodash = _;
Vue.component('chart', ECharts);
Vue.http.interceptors.push((request, next) => {
    console.log(request)
    const TOKEN = localStorage.getItem('token');
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

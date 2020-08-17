import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const AuthServices = Vue.resource('rest-auth/', {}, {
    login: { method: 'POST', url: 'rest-auth/login/' },
    register: { method: 'POST', url: 'rest-auth/registration/' },
    test: { method: 'GET', url: 'https://jsonplaceholder.typicode.com/todos/'}
});

const services = {
    auth: AuthServices,
};

export default services;

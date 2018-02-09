import Vue from 'vue';
import App from './App.vue';
import router from './routes.js';
//import store from './store';

require('./index.scss');

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
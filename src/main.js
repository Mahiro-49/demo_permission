import Vue from 'vue'
import App from './App.vue'


import router from './router'
import store from './store'
import request from './request/axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import "zico/css/zico.min.css";
import './routesPermission'
import './mock'


Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$bus = new Vue()

Vue.prototype.$request = request

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
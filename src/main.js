// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {VueAxios} from './config/axios'
import * as api from './api'
import 'amfe-flexible'
import store from './config/store'
Vue.config.productionTip = false
Vue.prototype.$api=api;

Vue.use(VueAxios,router);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

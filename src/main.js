import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ApiService from "@/common/api.service.js"
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import '@/mock/mock.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

ApiService.init();
ApiService.setHeader();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

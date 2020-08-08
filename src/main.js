import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ApiService from "@/common/api.service.js"

import vuetify from './plugins/vuetify';

ApiService.init();
ApiService.setHeader();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

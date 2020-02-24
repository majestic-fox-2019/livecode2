import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import axios from 'axios';
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

axios.defaults.baseURL = "http://localhost:3000"

Vue.config.productionTip = false

Vue.use(axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Swal from 'sweetalert2'

Vue.config.productionTip = false
Vue.prototype.$axios = axios.create({baseURL : 'http://localhost:3000'})
Vue.prototype.$swal = Swal

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

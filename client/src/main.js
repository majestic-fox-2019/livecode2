import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import swal from 'sweetalert2'

Vue.config.productionTip = false;

Vue.prototype.$axios = axios
Vue.prototype.$Swal = swal
Vue.prototype.$server = 'http://localhost:3000'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

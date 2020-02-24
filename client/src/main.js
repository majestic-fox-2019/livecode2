import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import VueToastify from 'vue-toastify'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueToastify, {
  customNotifications: {
    notifSuccess: {
      type: "success",
      defaultTitle: true,
      canTimeout: true
    },
    notifError: {
      type: "error",
      defaultTitle: true,
      canTimeout: true
    },
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

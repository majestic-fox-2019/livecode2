import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Movies from './views/Movies.vue'


Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false;

const routes = [
  { path: '/movies', component: Movies },
  // { path: '/bar', component: Bar }
]


const router = new VueRouter({
  mode: 'history',
  routes
})



const store = new Vuex.Store({
  state: {
    url_base: 'http://localhost:3000',
    dataUpdate: null,
    updateId: null
    // showUpdate: false,
    // dataMovie: null
  },
  mutations: {
    dataUpdate(state, data) {
      state.dataUpdate = data.body
      state.updateId = data.body.id
      // console.log(data.body.id);
    },

    showUpdate(state, data) {
      state.showUpdate = true
      state.dataMovie = data
  }
  }
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

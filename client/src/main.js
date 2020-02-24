import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
// import VueRouter from 'vue-router'
// import Vuex from 'vuex'

// Vue.use(Vuex)
// Vue.use(VueRouter)

Vue.config.productionTip = false;

// const routes = [
  //   { path: '/foo', component: Foo },
  //   { path: '/bar', component: Bar }
  // ]
  
  
  // const router = new VueRouter({
    //   routes // short for `routes: routes`
    // })
    
    
    
const store = new Vuex.Store({
  state: {
    url_base: 'http://localhost:3000'
  },
  mutations: {
    increment(state) {
    //
    }
  }
})
    
new Vue({
    vuetify,
    // router,
    store,
    render: h => h(App)
}).$mount("#app");

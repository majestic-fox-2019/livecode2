import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from "axios"

export default new Vuex.Store({
  state: {
    alldata: null
  },
  mutations: {
    saveData(state, payload) {
      state.alldata = payload
    }
  },
  actions: {
    getAllData({ commit }) {
      axios({
        method: "GET",
        url: "http://localhost:3000"
      })
        .then(response => {
          commit("saveData", response);
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: ''
  },
  mutations: {
    SET_MOVIES(state, payload) {
      state.movies = payload
    }
  },
  actions: {
    getAllMovies({ commit }) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/movies'
      })
        .then(result => {
          commit('SET_MOVIES', result)
        })
        .catch(err => {
          console.log(err, 'dari vuex')
        })
    }
  },
  modules: {}
})

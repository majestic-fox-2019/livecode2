import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies : [],
    errors : []
  },
  mutations: {
    get_movies(state, payload){
      state.movies = payload
    },
    get_error(state, payload){
      state.errors = payload
    }
  },
  actions: {
    getMovie({ commit }){
      axios.get('http://localhost:3000/movies')
      .then(response => {
        commit('get_movies', response.data.body)
      })
      .catch(err => {
        commit('get_error', err.response.data)
      })
    }
  },
  modules: {
  }
})

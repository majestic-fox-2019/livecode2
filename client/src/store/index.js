import Vue from 'vue'
import Vuex from 'vuex'
import api from '../helper/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: null,
  },
  mutations: {
    SET_MOVIES(state, payload) {
      state.movies = payload
    }
  },
  actions: {
    getMovies(context) {
      api
        .get('/movies')
        .then(({ data }) => {
          console.log(data)
          context.commit('SET_MOVIES', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})

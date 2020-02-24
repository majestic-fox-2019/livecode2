import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    superagent: require('superagent'),
    backend_url: 'http://localhost:3000',
    movies: null,
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies
    },
  },
  actions: {

  },
  modules: {
    
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.prototype.$axios = axios.create({ baseURL: 'http://localhost:3000' })

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    FETCH_MOVIES (state, movies) {
      state.movies = movies
    }
  },
  actions: {
    fetchMovies ({ commit }, { values }) {
      this.$axios.get('/movies')
        .then (response => {
          commit("FETCH_MOVIES", response.body);
          values.filterMovies()
        })
        .catch (err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})

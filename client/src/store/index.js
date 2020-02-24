import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

const baseUrl = "http://localhost:3000"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    movie: {}
  },
  mutations: {
    setMovies(state, payload) {
      state.movies = payload
    },
    setMovie(state, payload) {
      state.movie = payload
    }
  },
  actions: {
    findAllMovies(context) {
      axios({
        url: `${baseUrl}/movies`,
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setMovies', data)
        })
        .catch(err => {
          console.log(err);
        })
    },
    findOneMovie(context, payload) {
      axios({
        url: `${baseUrl}/movies/${payload}`,
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setMovie', data)
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
const BASE_URL = `http://localhost:3000`

export default new Vuex.Store({
  state: {
    movies: [],
    movie: []
  },
  mutations: {
    SET_MOVIES(state, payload) {
      state.movies = payload
    },
    SET_MOVIE(state, payload) {
      state.movie = payload
    }
  },
  actions: {
    fetchMovie({ commit, state, dispatch }) {
      axios({
        method: 'get',
        url: `${BASE_URL}/movies`,
      })
        .then(({ data }) => {
          commit('SET_MOVIES', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getMovies({ commit, state, dispatch }, payload) {
      axios({
        method: 'get',
        url: `${BASE_URL}/movies/${payload}`,
      })
        .then(({ data }) => {
          commit('SET_MOVIE', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteRating({ commit, state, dispatch }, payload) {
      axios({
        method: 'delete',
        url: `${BASE_URL}/rates/${payload}`,
      })
        .then((data) => {
          dispatch('getMovies')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})

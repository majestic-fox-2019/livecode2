import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseURL = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    movies: null,
    movie: null,

  },
  mutations: {
    SET_MOVIES(state, payload) {
      state.movies = payload
    },
    SET_MOVIE(state, payload) {
      state.movie = payload
    },

  },
  actions: {
    getMovies(context) {
      axios({
        url: `${baseURL}/movies`,
        method: 'get',
      })
      .then(({ data }) => {
        context.commit('SET_MOVIES', data)
      })
      .catch(error => {
        console.log(error.response)
      })
    },

    getOneMovie(context, payload) {
      const id = payload
      axios({
        url: `${baseURL}/movies/${id}`,
        method: 'get',
      })
      .then(({ data }) => {
        context.commit('SET_MOVIE', data)
      })
      .catch(error => {
        console.log(error.response)
      })
    },

    saveMovie(context, payload) {
      const id = payload.id
      axios({
        url:`${baseURL}/movies/${id}`,
        method: 'put',
        data: payload
      })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(error => {
        console.log(error.response)
      })
    }
  },
  modules: {
  }
})

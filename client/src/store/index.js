import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: 'http://localhost:3000',
    movieList: [],
    movieDetails: null
  },
  mutations: {
    SET_MOVIELIST (state, payload) {
      state.movieList = payload
    },
    SET_MOVIEDETAILS (state, payload) {
      state.movieDetails = payload
    }
  },
  actions: {
    fetchMovies (state , payload) {
      axios({
        url: this.state.baseUrl + '/movies',
        method: 'get'
      })
      .then(({ data }) => {
        this.commit('SET_MOVIELIST', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    FetchMovieDetails (state, payload) {
      axios({
        url: this.state.baseUrl + '/movies/' + payload.id,
        method: 'get'
      })
      .then(({ data }) => {
        this.commit('SET_MOVIEDETAILS', data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})

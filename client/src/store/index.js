import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

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
    },
    addRate (state, payload) {
      let {
        movieId,
        reviewer,
        point
      } = payload
      axios({
        url: this.state.baseUrl + '/rates/' + movieId,
        method: 'post',
        data: {
          reviewer,
          point
        }
      })
      .then(({ data }) => {
        this.dispatch('FetchMovieDetails', {
          id: payload.movieId
        })
        router.push(`/movie/${payload.movieId}/ratings`)
      })
      .catch(err => {
        console.log(err.response)
      })
    },
    deleteRate (state, payload) {
      axios({
        url: this.state.baseUrl + '/rates/' + payload.id,
        method: 'delete'
      })
      .then (({ data }) => {
        this.dispatch('FetchMovieDetails', {
          id: payload.movieId
        })
      })
      .catch(err => {
        console.log(err.response)
      })
    },
    editMovie (state, payload) {
      let {
        title,
        year,
        imdbID,
        type,
        poster,
        movieId
      } = payload
      axios({
        url: this.state.baseUrl + '/movies/' + movieId,
        method: 'put',
        data: {
          title,
          year,
          imdbID,
          type,
          poster
        }
      })
      .then(({ data }) => {
        this.dispatch('FetchMovieDetails', {
          id: payload.movieId
        })
        router.push(`/movie/${payload.movieId}/ratings`)
      })
      .catch(err => {
        console.log(err.response)
      })
    }
  },
  modules: {
  }
})

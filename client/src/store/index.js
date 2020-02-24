import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import Swal from 'sweetalert2'

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
        let message = ''
        err.response.data.message.forEach(element => {
          message += `${element} `
        });
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message,
        })
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
        let message = ''
        err.response.data.message.forEach(element => {
          message += `${element} `
        });
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message,
        })
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
        let message = ''
        err.response.data.message.forEach(element => {
          message += `${element} `
        });
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message,
        })
      })
    },
    deleteRate (state, payload) {
      axios({
        url: this.state.baseUrl + '/rates/' + payload.id,
        method: 'delete'
      })
      .then (({ data }) => {
        Swal.fire(
          'Deleted!',
          'Rate has been deleted.',
          'success'
          )
        this.dispatch('FetchMovieDetails', {
          id: payload.movieId
        })
      })
      .catch(err => {
        let message = ''
        err.response.data.message.forEach(element => {
          message += `${element} `
        });
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message,
        })
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
        let message = ''
        err.response.data.message.forEach(element => {
          message += `${element} `
        });
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message,
        })
      })
    },
    filteredMovies (state, payload) {
      axios({
        url: this.state.baseUrl + '/movies/type/' + payload.target,
        method: 'get'
      })
      .then(({ data }) => {
        this.commit('SET_MOVIELIST', data)
      })
      .catch(err => {
        let message = ''
        err.response.data.message.forEach(element => {
          message += `${element} `
        });
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message,
        })
      })
    }
  },
  modules: {
  }
})

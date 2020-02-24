import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

const baseUrl = "http://localhost:3000"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    movie: {},
    whatNowShow: "rating",
    idMovie: ""
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
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data,
          })
        })
    },
    findOneMovie(context, payload) {
      axios({
        url: `${baseUrl}/movies/${payload}`,
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setMovie', data)
          this.idMovie = data.id
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data,
          })
        })
    },
    removeReview(context, payload) {
      axios({
        url: `${baseUrl}/rate/${payload}`,
        method: 'DELETE'
      })
        .then(({ data }) => {
          context.dispatch('findOneMovie', this.idMovie)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data,
          })
        })
    },
    addNewReviewer(context, payload) {
      axios({
        url: `${baseUrl}/rate/${this.idMovie}`,
        method: 'POST',
        data: {
          reviewer: payload.reviewer,
          point: Number(payload.point)
        }
      })
        .then(({ data }) => {
          context.dispatch('findOneMovie', this.idMovie)
          this.whatNowShow = 'rating'
          this.$router.push(`/${this.idMovie}`);
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data,
          })
        })
    },
    editMovie(context, payload) {
      console.log(this.state.movie.title);
      axios({
        url: `${baseUrl}/movies/${this.idMovie}`,
        method: "PUT",
        data: {
          title: this.state.movie.title,
          year: this.state.movie.year,
          type: this.state.movie.type,
          poster: this.state.movie.poster,
          imdbID: this.state.movie.imdbID
        }
      })
        .then(({ data }) => {
          context.dispatch('findOneMovie', this.idMovie)
          this.whatNowShow = 'rating'
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data,
          })
        })
    }
  },
  modules: {
  }
})

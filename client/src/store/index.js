import Vue from 'vue'
import Vuex from 'vuex'
import Swal from 'sweetalert2'
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
    updateMovie({ commit, state, dispatch }, payload) {
      const body = {
        title: payload.title,
        year: payload.year,
        poster: payload.poster,
        type: payload.type
      }
      axios({
        method: 'put',
        url: `${BASE_URL}/movies/${payload.id}`,
        data: body
      })
        .then(({ data }) => {
          let tempRating = state.movie.Ratings
          data[1].Ratings = tempRating
          commit('SET_MOVIE', data[1])
          let temp = state.movies.filter(el => {
            return el.id != payload.id
          })
          temp.push(data[1])
          commit('SET_MOVIES', temp)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data}`
          })
        })
    },
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
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data}`
          })
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
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data}`
          })
        })
    },
    deleteRating({ commit, state, dispatch }, payload) {
      axios({
        method: 'delete',
        url: `${BASE_URL}/rates/${payload}`,
      })
        .then((data) => {
          let temp = state.movie.Ratings.filter(el => {
            return el.id != payload
          })
          state.movie.Ratings = temp
          commit('SET_MOVIE', state.movie)
        })
        .catch(err => {
          console.log(err.response.data)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data}`
          })
        })
    },
    addRating({ commit, state, dispatch }, payload) {
      const body = {
        reviewer: payload.reviewer,
        point: payload.points,
      }
      console.log(body)
      axios({
        method: 'post',
        url: `${BASE_URL}/rates/${payload.MovieID}`,
        data: body
      })
        .then(({ data }) => {
          state.movie.Ratings.push(data)
          commit('SET_MOVIE', state.movie)
        })
        .catch(err => {
          console.log(err.response.data)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data}`
          })
        })
    }
  },
  modules: {
  }
})

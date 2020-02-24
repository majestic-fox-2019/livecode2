import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    BASE_URL: 'http://localhost:3000',
    movies: [],
    movieDetails: null,
    editData: null,
    ratings: []
  },
  mutations: {
    GET_MOVIES(state, data) {
      state.movies = data
    },
    GET_DETAILS(state, data) {
      state.movieDetails = data
    },
    CLEAR_DETAILS(state) {
      state.movieDetails = null
    }
  },
  actions: {
    FETCH_MOVIES(context) {
      Swal.showLoading()
      axios
        .get(`${this.state.BASE_URL}/movies`)
        .then(({ data }) => {
          Swal.close()
          context.commit('GET_MOVIES', data)
        })
        .catch(({ response }) => {
          Swal.close()
          const errors = response.data
          console.log(errors)
        })
    },
    FETCH_DETAILS(context, val) {
      Swal.showLoading()
      axios
        .get(`${this.state.BASE_URL}/movies/${val}`)
        .then(({ data }) => {
          Swal.close()
          context.commit('GET_DETAILS', data)
        })
        .catch(({ response }) => {
          Swal.close()
          const errors = response.data
          console.log(errors)
        })
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    BASE_URL: 'http://localhost:3000',
    movies: [],
    movieDetails: null,
    editData: null,
    addRating: false,
    searchKey: ''
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
    },
    CLEAR_EDIT_DATA(state) {
      state.editData = null
    },
    ADD_RATING(state, data) {
      state.addRating = data
    },
    SEARCH_KEY(state, data) {
      state.searchKey = data
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
          Swal.fire('Error', errors.errors[0], 'error')
        })
    },
    FETCH_DETAILS(context, val) {
      axios
        .get(`${this.state.BASE_URL}/movies/${val}`)
        .then(({ data }) => {
          context.commit('GET_DETAILS', data)
        })
        .catch(({ response }) => {
          const errors = response.data
          Swal.fire('Error', errors.errors[0], 'error')
        })
    },
    EDIT_MOVIE(context) {
      Swal.showLoading()
      axios
        .put(
          `${this.state.BASE_URL}/movies/${this.state.movieDetails.id}`,
          this.state.movieDetails
        )
        .then(({ data }) => {
          Swal.close()
          Swal.fire('Congratulations', 'Edit data success', 'success')
          router.push('/movie/' + data.id)
          context.commit('CLEAR_EDIT_DATA')
        })
        .catch(({ response }) => {
          Swal.close()
          const errors = response.data
          Swal.fire('Error', errors.errors[0], 'error')
        })
    },
    ADD_RATING(context, val) {
      Swal.showLoading()
      axios
        .post(`${this.state.BASE_URL}/rates/${this.state.movieDetails.id}`, val)
        .then(({ data }) => {
          Swal.close()
          Swal.fire('Success', 'New Rate added', 'success')
          this.dispatch('FETCH_DETAILS', this.state.movieDetails.id)
          context.commit('ADD_RATING', false)
        })
        .catch(({ response }) => {
          Swal.close()
          const errors = response.data
          Swal.fire('Error', errors.errors[0], 'error')
        })
    },
    DELETE_RATING(context, val) {
      Swal.showLoading()
      axios
        .delete(`${this.state.BASE_URL}/rates/${val}`)
        .then(response => {
          this.dispatch('FETCH_DETAILS', this.state.movieDetails.id)
          Swal.fire('Success', 'Rate deleted', 'success')
        })
        .catch(({ response }) => {
          Swal.close()
          const errors = response.data
          Swal.fire('Error', errors.errors[0], 'error')
        })
    }
  }
})

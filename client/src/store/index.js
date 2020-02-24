import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieList: [],
    movieDetail: {}
  },
  mutations: {
    SAVE_ALL_MOVIES(state, data) {
      state.movieList = data
    },
    SAVE_MOVIE_DETAIL(state, data) {
      state.movieDetail = data
    }
  },
  actions: {
    GET_ALL_MOVIES({ commit }) {
      axios({
        method: 'GET',
        url: '/movies'
      })
        .then(({ data }) => {
          commit('SAVE_ALL_MOVIES', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    GET_MOVIE_DETAIL({ commit }, id) {
      axios({
        method: 'GET',
        url: `/movies/${id}`
      })
        .then(({ data }) => {
          commit('SAVE_MOVIE_DETAIL', data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {}
})

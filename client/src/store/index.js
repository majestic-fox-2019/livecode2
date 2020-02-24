import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// Vue.prototype.$axios = axios.create({ baseURL: 'http://localhost:3000' })

export default new Vuex.Store({
  state: {
    movies: null
  },
  getters: {
    MOVIES: state => {
      return state.movies
    }
  },
  mutations: {
    SET_MOVIES (state, payload) {
      state.movies = payload
    }
  },
  actions: {
    // GET_MOVIES ({ commit }, { values }) {
    //   axios.get('http://localhost:3000/movies')
    //     .then(response => {
    //       console.log(response)
    //       commit('GET_MOVIES', response.data)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }
    GET_MOVIES: async (context, payload) => {
      const {
        data
      } = await axios.get('http://localhost:3000/movies')
      context.commit('SET_MOVIES', data)
    }
  },
  modules: {
  }
})

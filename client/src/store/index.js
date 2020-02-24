import Vue from 'vue'
import Vuex from 'vuex'
import { config } from '../config'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    movies: null
  },
  mutations: {
    getError(state, err){
      state.error = err
    },
    getMovie(state, data){
      state.movies = data
      console.log('ini data movie', state.movies) 
    }
  },
  actions: {
    fetchMovie({commit}){
      config({
        method: 'get',
        url: 'movies',
      })
      .then(response => {
        console.log(response.data)
        const data = response.data
        commit('getMovie', data)
      })
      .catch(err => {
        context.commit('getError', err)
      })
    }
  },
  modules: {
  }
})

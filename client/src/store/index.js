import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies : [],
    movie : {},
    movieId : null
  },
  mutations: {
    SET_MOVIES(state, payload){
      state.movies = payload
    },
    SET_CURRENT_ID(state, payload){
      state.movieId = payload
    },
    SET_MOVIE(state, payload){
      state.movie = payload
    }
  },
  actions: {
    getMovies({commit}){
      axios({
        url : 'http://localhost:3000/movies/',
        method : 'get',
      })
      .then(({data})=>{
        console.log(data)
        commit('SET_MOVIES', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    getOneMovie({commit}, payload){
      console.log('masuk get one movie')
      axios({
        url : 'http://localhost:3000/movies/'+payload,
        method : 'get',
      })
      .then(({data})=>{
        commit('SET_MOVIE', data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})

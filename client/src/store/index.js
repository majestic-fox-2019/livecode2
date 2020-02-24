import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    GET_ALL_MOVIES: (state, payload) => {
      state.movies = payload
    }
  },
  actions: {
    getAllMovies({ commit }){
      axios.get('http://localhost:3000/movies')
      .then(res => {
        commit("GET_ALL_MOVIES", res.data);
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
    
  }
})

import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    id: ''
  },
  mutations: {
    movies (state, movies) {
      // mutate state
      state.movies = movies
    }
  },
  actions: {
    movies ({ commit }) {
      axios({
        url: 'http://localhost:3000/movies',
        method: 'get'
      })
        .then(movies=>{
          commit('movies',movies.data)
        })
        .catch(error=>{
          console.log(error)
        })
    }
  },
  modules: {}
});

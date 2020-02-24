import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

const server = 'http://localhost:3000'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: null
  },
  mutations: {
    GET_MOVIES(state, payload) {
      state.movies = payload
    }
  },
  actions: {
    getMovies(context) {
      axios({
        method: 'get',
        url: `${server}/movies`
      })
        .then(movies => {
          context.commit('GET_MOVIES', movies.data)
          console.log(movies.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {}
});

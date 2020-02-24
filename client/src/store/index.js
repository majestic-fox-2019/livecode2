import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: null,
  },
  mutations: {
    ALL_MOVIES(state, payload) {
      this.state.movies = payload;
    },
  },
  actions: {
    findAllMovies({ commit }) {
      axios.get('http://localhost:3000/movies')
        .then((movie) => {
          console.log(movie.data);
          commit('ALL_MOVIES', movie.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {
  },
});

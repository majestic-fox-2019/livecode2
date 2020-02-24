import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3000' });

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    currentMovie: null
  },
  mutations: {
    FETCH_MOVIES(state, data) {
      state.movies = [...data];
    },
    SET_CURRENT_MOVIE(state, data) {
      state.currentMovie = { ...data };
    }
  },
  actions: {
    fetchMovies({ commit }) {
      api.get('/movies')
        .then(result => {
          commit('FETCH_MOVIES', result.data.movies);
        })
        .catch(err => {
          console.log(err);
        });
    },
    setCurrentMovie({ commit }, payload) {
      commit('SET_CURRENT_MOVIE', payload);
    }
  },
  modules: {}
});

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const server = "http://localhost:3000";
export default new Vuex.Store({
  state: {
    movies: null,
    movie: null,
    rates: null
  },
  mutations: {
    listMovies(state, payload) {
      state.movies = payload;
    },
    getMovie(state, payload) {
      state.movie = payload;
    },
    getRates(state, payload) {
      state.rates = payload;
    }
  },
  actions: {
    showMovie({ commit }) {
      axios({
        method: "get",
        url: `${server}/movies`
      })
        .then(data => {
          commit("listMovies", data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    findMovie({ commit }, id) {
      axios({
        method: "get",
        url: `${server}/movies/${id}`
      })
        .then(data => {
          commit("getMovie", data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getRate({ commit }, id) {
      axios({
        method: "get",
        url: `${server}/rate/${id}`
      })
        .then(data => {
          commit("getRates", data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  modules: {}
});

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let url = "http://localhost:3000";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listMovies: [],
  },
  mutations: {
    LISTALLMOVIES(state, payload) {
      state.listMovies = payload
    }
  },
  actions: {
    getMoviesData(context) {
      axios
        .get(`${url}/movies`)
        .then(res => {
          context.commit('LISTALLMOVIES', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getFilteredTypeMovies(context, filterType) {
      axios
        .get(`${url}/movies/find/${filterType}`)
        .then(res => {
          console.log(res.data)
          context.commit('LISTALLMOVIES', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getFilteredTitleMovies(context, filterTitle) {
      axios
        .get(`${url}/movies/title/${filterTitle}`)
        .then(res => {
          console.log(res.data)
          context.commit('LISTALLMOVIES', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
});

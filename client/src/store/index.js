import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

const baseUrl = "http://localhost:3000";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: null, 
    selectedMovie: null, 

    reviewer: null, 
    rating: null, 

    title: null, 
    year: null, 
    type: null, 
    poster: null, 
    imdb: null

  },
  mutations: {
    getMovies(state, data) {
      state.movies = data
    }, 
    selectMovie(state, data) {
      state.selectedMovie = state.movies[data];
      state.title = state.movies[data].title;
      state.year = state.movies[data].year;
      state.type = state.movies[data].type;
      state.poster = state.movies[data].poster;
      state.imdb = state.movies[data].imdbID;
    }, 

    updateReviewer(state, data) {
      state.reviewer = data;
    },
    updateRating(state, data) {
      state.rating = data;
    },

    updateTitle(state, data) {
      state.title = data;
    },
    updateYear(state, data) {
      state.year = data;
    },
    updateType(state, data) {
      state.type = data;
    },
    updatePoster(state, data) {
      state.poster = data;
    },
    updateImdb(state, data) {
      state.imdb = data;
    },

    addRate(state, data) {
      state.selectedMovie.Rates.push(data);
    },
    clearAddRateForm(state) {
      state.reviewer = null;
      state.rating = null;
    },
    updateMovie(state, data) {
      state.movies.forEach(el => {
        if(el == state.selectedMovie) {
          el = data;
          state.selectMovie = data;
        }
      });
    },
    deleteRate(state, data) {
      console.log(state.selectedMovie.Rates, data);
      state.selectedMovie.Rates.splice(data, 1);
    }
  },
  actions: {
    getMovies({commit}) {
      axios.get(`${baseUrl}/movies`)
      .then(data => {
        commit("getMovies", data.data);
      })
      .catch(err => {
        console.log(err);
      });
    }, 
    addRate({commit}) {
      const id = this.state.selectedMovie.id;
      const obj = {
        reviewer: this.state.reviewer, 
        point: this.state.rating
      }
      axios.post(`${baseUrl}/rate/${id}`, obj)
      .then(data => {
        commit("addRate", data.data);
        commit("clearAddRateForm");
      })
      .catch(err => {
        console.log(err);
      });
    }, 
    deleteRate({commit}, data) {
      const id = data.id;
      axios.delete(`${baseUrl}/rate/${id}`)
      .then(data => {
        commit("deleteRate", data.i);
      })
      .catch(err => {
        console.log(err);
      })
    }, 
    updateMovie({commit}, data) {
      const id = this.state.selectedMovie.id;
      const obj = {
        title: this.state.title, 
        year: this.state.year, 
        type: this.state.type, 
        poster: this.state.poster, 
        imdbID: this.state.imdb
      }
      axios.put(`${baseUrl}/movies/${id}`, obj)
      .then(data => {
        commit("updateMovie", data.data);
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  modules: {
  }
})

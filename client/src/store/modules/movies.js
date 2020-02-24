import axios from 'axios';

const state = {
  movies: null,
  movieDetail: null
}

const getters = {
  getAllMovie(state) {
    return state.movies;
  },
  getMovie(state) {
    return state.movieDetail;
  }
}

const mutations = {
  "get all movie"(state, data) {
    state.movies = data;
  },
  "get movie"(state, data) {
    state.movieDetail = data;
  }
}

const actions = {
  "get all movie"({ commit }, query = "") {
    axios({
      url: `/movies?q=${query}`,
      method: "get"
    })
      .then(({ data }) => {
        commit("get all movie", data);
      }).catch((err) => {
        console.error(err);
      });
  },
  "get movie"({ commit }, movieId) {
    axios({
      url: `/movies/${movieId}`,
      method: "get"
    })
      .then(({ data }) => {
        commit("get movie", data);
    }).catch((err) => {
          console.error(err);
        });
  },
  "delete rate"(context, payload) {
    axios({
      url: `/rates/${payload.rateId}`,
      method: "delete"
    })
    .then(() => {
      context.dispatch("get movie", payload.movieId)
    }).catch((err) => {
      console.error(err);
    });
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
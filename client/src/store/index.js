import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: "http://localhost:3000",
    allMovies: [],
    movieDetail: null,
    dummy: ""
  },
  mutations: {
    setAllMovie(state, movies) {
      state.allMovies = movies
    },
    setDetailMovie(state, detail) {
      state.movieDetail = detail
    },
    dummy(state, data) {
      state.dummy = data
    }
  },
  actions: {
    getAllMovie(context) {
      // console.log("masyk get movies")
      axios({
        method: "GET",
        url: `${this.state.baseUrl}/movies`
      })
        .then(({ data }) => {
          // console.log(data, "<< ini dari movie")
          context.commit("setAllMovie", data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getMovieDetail(context, id) {
      axios({
        method: "GET",
        url: `${this.state.baseUrl}/movies/${id}`
      })
        .then(({ data }) => {
          console.log(data, "<< ini detail")
          context.commit("setDetailMovie", data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateMovie(context, payload) {
      let { id, title, poster, year, type } = payload
      axios({
        method: "PUT",
        url: `${this.state.baseUrl}/movies/${id}`,
        data: {
          title, poster, year, type
        }
      })
        .then(({ data }) => {
          console.log(data, "<< ini dari data updta")
          context.commit("dummy", "dummy")
          context.dispatch("getMovieDetail", data.id)
        })
        .catch(err => {
          console.log(err, "<< ini error update")
        })
    }
  },
  modules: {
  }
})

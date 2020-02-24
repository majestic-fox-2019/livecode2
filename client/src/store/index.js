import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import Swal from "sweetalert2"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: "http://localhost:3000",
    allMovies: [],
    movieDetail: null,
    dummy: "",
    categorynya: null
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
    },
    setCategory(state, data) {
      state.categorynya = data
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
          Swal.fire('OOPS', "Something went wrong", "error")

        })
    },
    getMovieDetail(context, id) {
      return axios({
        method: "GET",
        url: `${this.state.baseUrl}/movies/${id}`
      })
        .then(({ data }) => {
          console.log(data, "<< ini detail")
          context.commit("setDetailMovie", data)
        })
        .catch(err => {
          console.log(err)
          Swal.fire('OOPS', "Something went wrong", "error")
        })
    },
    updateMovie(context, payload) {
      let { id, title, poster, year, type } = payload
      return axios({
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
          Swal.fire('OOPS', "Something went wrong", "error")

        })
    },
    postRating(context, data) {
      let { movieId, reviewer, point } = data
      return axios({
        method: "POST",
        url: `${this.state.baseUrl}/rates/${movieId}`,
        data: {
          reviewer, point
        }
      })
        .then(({ data }) => {
          console.log(data)
          // context.commit("dummy", "dummy")
          // console.log(movieId, "<<< ini di update")
          context.dispatch("getMovieDetail", movieId)

        })
        .catch(err => {
          console.log(err.response, "<< ini gagal post rating")
          if (err.response.data.message) {
            Swal.fire("oops", err.response.data.message, "error")
          } else {

            Swal.fire('OOPS', "Something went wrong", "error")
          }

        })
    },
    deleteRating(context, id) {
      return axios({
        method: "DELETE",
        url: `${this.state.baseUrl}/rates/${id}`
      })
        .then(({ data }) => {
          console.log(data, "< ini di delete")
        })
        .catch(err => {
          console.log(err, "<< ini error delete rating")
          Swal.fire('OOPS', "Something went wrong", "error")

        })
    },
    getCategory(context, category) {
      axios({
        method: "Get",
        url: `${this.state.baseUrl}/movies/category/${category}`
      })
        .then(({ data }) => {
          context.commit("setCategory", data)
        })
        .catch(err => {
          console.log(err, "<< ini error filter caegory")
          Swal.fire("Opps", "Something went wrong", "error")
        })
    },
    searchThis(context, data) {
      axios({
        method: "GET",
        url: `${this.state.baseUrl}/movies/title/${data}`
      })
        .then(({ data }) => {
          console.log(data, "<< ini hasil dari search title")
        })
        .catch(err => {
          console.log(err, "<< ini error filter title")
          Swal.fire("OOPS", "Backend search belom jadi :D", "error")
        })
    }
  },
  modules: {
  }
})

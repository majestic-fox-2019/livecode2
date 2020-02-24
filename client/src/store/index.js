import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert2' 
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies : [],
    movie : {},
    movieId : null
  },
  mutations: {
    SET_MOVIES(state, payload){
      state.movies = payload
    },
    SET_CURRENT_ID(state, payload){
      state.movieId = payload
    },
    SET_MOVIE(state, payload){
      state.movie = payload
    }
  },
  actions: {
    getMovies({commit}){
      axios({
        url : 'http://localhost:3000/movies/',
        method : 'get',
      })
      .then(({data})=>{
        console.log(data)
        commit('SET_MOVIES', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    getOneMovie({commit}, payload){
      console.log('masuk get one movie')
      axios({
        url : 'http://localhost:3000/movies/'+payload,
        method : 'get',
      })
      .then(({data})=>{
        commit('SET_MOVIE', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    deleteRating({commit, dispatch, state}, id){
      axios({
        url : 'http://localhost:3000/rates/'+id,
        method : 'delete',
      })
      .then(({data})=>{
        console.log(data)
        dispatch('getOneMovie', state.movieId)
        swal.fire(data.message)
      })
      .catch(err => {
        console.log(err)
        swal.fire('oops something went wrong')
      })
    },
    addNewRating({dispatch, state}, payload){
      axios({
        url : 'http://localhost:3000/rates/'+payload.MovieId,
        method : 'post',
        data : {
          reviewer : payload.reviewer,
          point : payload.point
        }
      })
      .then(({data})=>{
        swal.fire('added a new rating')
        dispatch('getOneMovie', state.movieId)
        router.push('/movies/'+payload.MoveiId)
      })
      .catch(err => {
        swal.fire(err.response.data.errors[0].message)
        console.log(err.response.data.errors[0].message)
      })
    },
    editMovie({dispatch, state}, payload){
      axios({
        url : 'http://localhost:3000/movies/'+state.movieId,
        method : 'put',
        data : {
          title : payload.title,
          year : payload.point,
          type : payload.type
        }
      })
      .then(({data})=>{
        swal.fire('sucessfully updated '+data.title)
        dispatch('getOneMovie', state.movieId)
        router.push('/movies/'+state.movieId)
      })
    }
  },
  modules: {
  }
})

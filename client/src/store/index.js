import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const url = 'http://localhost:3000/'
export default new Vuex.Store({
  state: {
    movies:[],
    movie:{}
  },
  mutations: {
    GET_MOVIES (state,payload){
      state.movies = payload
    },
    GET_DETAIL_MOVIES (state,payload){
      state.movie = payload
    }
  },
  actions: {
    getMovies (context) {
      axios({
        method:"get",
        url:`${url}movies`
      })
      .then(({data}) => {
        context.commit('GET_MOVIES',data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    getMoviesTitle (context,payload) {
      axios({
        method:"get",
        url:`${url}movies`
      })
      .then(({data}) => {
        let result = []
        for(let i =0; i< data.length; i++){
          if(data[i].title.toLowerCase().search(payload.title.toLowerCase()) !== -1){
            result.push(data[i])
          }
        }
        context.commit('GET_MOVIES',result)
      })
      .catch(err => {
        console.log(err)
      })
    },
    getMoviesType (context,payload) {
      axios({
        method:"get",
        url:`${url}movies`
      })
      .then(({data}) => {
        let result = []
        for(let i =0; i< data.length; i++){
          if(data[i].type === payload.type){
            result.push(data[i])
          }
        }
        context.commit('GET_MOVIES',result)
      })
      .catch(err => {
        console.log(err)
      })
    },
    getDetailMovies (context,payload) {
      axios({
        method:"get",
        url:`${url}movies/${payload.id}`
      })
      .then(({data}) => {
        context.commit('GET_DETAIL_MOVIES',data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})

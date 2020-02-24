import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const baseURL = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getMovies(context, payload) {
      axios({
        url: `${baseURL}/movies`,
        method: 'get',
      })
      .then(({ data }) => {
        
      })
    }
  },
  modules: {
  }
})

<template>
  <div>
    <div v-for="movie in movies" :key="movie.id">
      <div  class="card">
        <img :src="movie.poster">
        <div>
          <h5>{{movie.title}}</h5>
          <p>{{movie.year}}</p>
          <p>{{movie.type}}</p>
          <button @click="detail(movie.id)">details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      movies: null
    }
  },
  created() {
    axios({
      url: 'http://localhost:3000/movies',
      method: 'get'
    })
      .then(movies=>{
        this.movies = movies.data
        console.log(movies)
      })
      .catch(error=>{
        console.log(error)
      })
  },
  methods: {
    detail(id) {
      this.$router.push({ name: 'Detail', params: { id }})
    }
  }
}
</script>

<style scoped>
  .card {
    height: 400px;
    width: 200px;
  }
</style>
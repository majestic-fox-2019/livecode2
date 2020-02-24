<template>
    <div>
    <ul>
      <li>
      <router-link :to="{ name: 'Detail', params: { id: movie.id }}">detail</router-link>

      </li>
      <li>
      <router-link :to="{ name: 'Rate', params: { id: movie.id }}">rates</router-link>

      </li>
    </ul>
      <div class="card">
        ini rates
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      movie: null
    }
  },
  created() {
    axios({
      url: `http://localhost:3000/movies/${this.$route.params.id}`,
      method: 'get'
    })
      .then(movie=>{
        this.movie = movie.data
        console.log(movie.data,"<<<<")
      })
      .catch(error=>{
        console.log(error)
      })
  },
  methods: {
    // update(id) {
    // }
  }
}
</script>

<style>

</style>
<template>
  <div class="home mx-5">
    <ItemCard
      v-for="(movie, i) in allMovies"
      :key="i"
      :data="movie"
      msg="Welcome to Your Vue.js App"
    />
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import ItemCard from '@/components/ItemCard.vue'

export default {
  name: 'Home',
  data() {
    return {
      allMovies: null
    }
  },
  components: {
    ItemCard
  },
  created() {
    axios({
      method: 'get',
      url: 'http://localhost:3000/movies'
    })
      .then(({ data }) => {
        this.allMovies = data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

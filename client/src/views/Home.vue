<template>
  <div class="home">  
    <card v-for="(movie, id) in movies" :key="id" :movie="movie"/>
    <router-view/>
  </div>
</template>

<script>
import Card from '../components/Card'
export default {
  name: 'Home',
  components: {
    Card
  },
  created(){
    this.$store.dispatch('fetchMovie')
  },
  computed: {
    movies(){
        return this.$store.state.movies
    }
  }
 
  
}
</script>

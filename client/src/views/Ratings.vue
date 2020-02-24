<template>
  <div>
      <button @click="goToRatingForm" class="btn btn-dark m-2">Add rating</button>
      <button @click="goToEditForm" class="btn btn-dark m-2">Edit Movie</button>
      <button @click="goToHome" class="btn btn-dark m-2">Home</button>
      <RatingCard v-for="(rating,i) in ratings" :key="i" :rating="rating"/>
  </div>
</template>

<script>
import RatingCard from '../components/RatingCard'

export default {
    name : 'Ratings',
    computed : {
        ratings(){
            return this.$store.state.movie.Ratings
        }
    },
    components : {
        RatingCard
    },
    methods : {
        goToRatingForm(){
            this.$router.push('/movies/'+this.$store.state.movieId+'/add-rating')
        },
        goToEditForm(){
            this.$router.push('/movies/'+this.$store.state.movieId+'/edit')
        },
        goToHome(){
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>
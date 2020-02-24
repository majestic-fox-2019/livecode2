<template>
  <div class="container">
    <div v-for="movie in movies" :key="movie.id">
      <div class="box mt-3">
        <!-- <div class="" style="max-width:50px"> -->
         <img :src="movie.poster" alt="">
        <!-- </div> -->
        <!-- <div> -->
          <h4>{{movie.title}}</h4>
          <p>{{movie.year}}</p>
          <p>{{movie.type}}</p>
          <a href="">IMDB</a>
          <button @click="goDetail(movie.id)">Detail</button>
        <!-- </div> -->
      </div>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ListMovie',
  data(){
    return {
      movies: null,
      img: null
    }
  },
  methods: {
    showMovie(){
      axios({
        method:"GET",
        url:'http://localhost:3000/movies'
      })
      .then(res => {
        console.log("masukkkk")
        this.movies = res.data
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    goDetail(id){
      this.$router.push({name: 'Detail', params: {id}})
    }
  },
  mounted(){
    this.showMovie()
  }
}
</script>

<style>

</style>
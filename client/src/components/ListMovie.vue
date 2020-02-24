<template>
  <div class="container">
    <div v-for="movie in movies" :key="movie.id">
      <div>
        <div class="card mb-3 d-flex ">
          <div class="col">
            <img :src="movie.poster" class="card-img-top" alt="..." style="max-height:400px; max-width:300px">
          </div>
          <div class="card-body col">
            <h5 class="card-title">{{movie.title}}</h5>
            <p class="card-text">{{movie.year}}</p>
            <p class="card-text">{{movie.type}}</p>
            <a href="https://www.imdb.com/title/">IMDB</a><br>
            <button type="button" class="btn btn-primary"  @click="goDetail(movie.id)">Detail</button>
          </div>
        </div>
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
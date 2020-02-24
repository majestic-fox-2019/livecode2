<template>
  <div class="container box">
    <button>Edit</button>
    <button>Delete</button>
    <button>Rating</button>
    <img :src="poster" alt="">
    <h3>Title: {{title}}</h3>
    <p>{{year}}</p>
    <p>{{type}}</p>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Detail',
  data(){
    return{
      title:null,
      year:null,
      type:null,
      poster:null,
      idMovie:this.$route.params.id
    }
  },
  methods: {
    getMovie(){
      axios({
        method: 'GET',
        url: `http://localhost:3000/movies/${this.idMovie}`
      })
      .then(res => {
        this.title = res.data.title
        this.year = res.data.year
        this.type = res.data.type
        this.poster = res.data.poster
        console.log(res.data)
      })
    }
  },
  created(){
    this.getMovie()
  }
}
</script>

<style>

</style>
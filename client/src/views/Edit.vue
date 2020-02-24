<template>
  <div class="p-5">
    <form @submit.prevent="update">
      <div class="form-group">
        <label >Title</label>
        <input type="text" class="form-control" v-model="title">
      </div>
      <div class="form-group">
        <label >Year</label>
        <input type="number" class="form-control" v-model="year">
      </div>
      <div class="form-group">
        <label >Type</label>
        <select class="form-control" v-model="type">
          <option>series</option>
          <option>movie</option>
        </select>
      </div>
      <div class="form-group">
        <label >Poster</label>
        <input type="text" class="form-control" v-model="poster">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name:"Edit",
  props:['id'],
  data(){
    return {
      title:'',
      year:'',
      type:'',
      poster:'',
    }
  },
  methods:{
    update() {
      axios({
        method:"put",
        url:`http://localhost:3000/movies/${this.id}`,
        data:{
          title:this.title,
          year:this.year,
          type:this.type,
          poster:this.poster
        }
      })
      .then(res => {
        Swal.fire({
          title: 'Success update movie!',
          text: 'success update movie',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        this.$store.dispatch('getDetailMovies',{id:this.id})
      })
      .catch(err => {
        Swal.fire({
          title: 'Error!',
          text: err.response.data.errors,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      })
    },
  },
  created() {
    let movie = this.movie
    this.title = movie.title
    this.year = movie.year
    this.type = movie.type
    this.poster = movie.poster
  },
  computed: {
    movie(){
      return this.$store.state.movie
    }
  },
  watch:{
    movie(){
      let movie = this.movie
      this.title = movie.title
      this.year = movie.year
      this.type = movie.type
      this.poster = movie.poster
    }
  }
}
</script>

<style>

</style>
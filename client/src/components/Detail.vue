<template>
  <div>
    <h4>{{movie.title}}</h4>
    <ul>
      <li>
      <router-link :to="{ name: 'Detail', params: { id: movie.id }}">detail</router-link>

      </li>
      <li>
      <router-link :to="{ name: 'Rate', params: { id: movie.id }}">rates</router-link>

      </li>

    </ul>
      <div class="card">
        <div v-if="editing == false">
          <img :src="movie.poster">
          <div>
            <h5>{{movie.title}}</h5>
            <p>{{movie.year}}</p>
            <p>{{movie.type}}</p>
            <button @click="editingStatus">Edit</button>
          </div>
        </div>
        <div v-else>
          <img :src="movie.poster">
          <input :value="movie.title">
          <input :value="movie.year">
          <select id="" v-model="editData.type">
            <option :value="series" >series</option>
            <option :value="movie" >movie</option>
          </select>
          <button @click="update">Update</button>
          <button @click="editing = false">Cancel</button>
          <!-- <div>
            <h5>{{movie.title}}</h5>
            <p>{{movie.year}}</p>
            <p>{{movie.type}}</p>
            <button @click="editing">Edit</button>
          </div> -->
        </div>
      </div>

    
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      movie: null,
      editing: false,
      editData: {
        type: "",
        title: ""
      }
    }
  },
  created() {
    console.log(this.$route.params.id)
    axios({
      url: `http://localhost:3000/movies/${this.$route.params.id}`,
      method: 'get'
    })
      .then(movie=>{
        this.movie = movie.data
        console.log(movie)
      })
      .catch(error=>{
        console.log(error)
      })
  },
  methods: {
    detail(id) {
      this.$router.push({ name: 'Detail', params: { id }})
    },
    editingStatus() {
      this.editing = !this.editing
    },
    update() {
      console.log(this.movie)
    // axios({
    //   url: `http://localhost:3000/movies/${this.$route.params.id}`,
    //   method: 'put'
    // })
    //   .then(movie=>{
    //     this.movie = movie.data
    //     console.log(movie)
    //   })
    //   .catch(error=>{
    //     console.log(error)
    //   })
    }
  }
}
</script>

<style>
  .card {
    border: 1px solid black;
    height: 300px;
    width: 200px;
  }
</style>
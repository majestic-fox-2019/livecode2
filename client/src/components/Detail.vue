<template>
  <div>
    <h4>{{title}}</h4>
    <ul>
      <li>
      <router-link :to="{ name: 'Detail', params: { id: movie.id }}">detail</router-link>
      </li>
      <li>
      <router-link :to="{ name: 'Rates', params: { movieId: movie.id }}">rates</router-link>
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
          <input v-model="editData.title">
          <input v-model="editData.year">
          <input v-model="editData.poster">
          <select v-model="editData.type">
            <option :value="series" >series</option>
            <option :value="movie" >movie</option>
          </select>
          <button @click="update">Update</button>
          <button @click="editing = false">Cancel</button>

        </div>
      </div>

    
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: '',
      movie: null,
      editing: false,
      editData: null,
    }
  },
  created() {
    axios({
      url: `http://localhost:3000/movies/${this.$route.params.id}`,
      method: 'get'
    })
      .then(movie=>{
        this.title = movie.data.title
        this.movie = movie.data
        this.editData = movie.data
        console.log(movie)
      })
      .catch(error=>{
        console.log(error)
      })
  },
  methods: {
    load() {
      axios({
        url: `http://localhost:3000/movies/${this.$route.params.id}`,
        method: 'get'
      })
        .then(movie=>{
          this.title = movie.data.title
          this.movie = movie.data
          this.editData = movie.data
          console.log(movie)
        })
        .catch(error=>{
          console.log(error)
        })
    },
    detail(id) {
      this.$router.push({ name: 'Detail', params: { id }})
    },
    editingStatus() {
      this.editing = !this.editing
    },
    update() {
      console.log(this.editData,"<<data")
      let id = this.$route.params.id
      axios({
        url: `http://localhost:3000/movies/${id}`,
        method: 'put',
        data: {
          title: this.editData.title,
          year: this.editData.year,
          // type: this.editData.type,
          poster: this.editData.poster,
        }
      })
        .then(movie=>{
          this.editing = !this.editing
          this.load()
          console.log(movie)
        })
        .catch(error=>{
          console.log(error)
        })
    }
  }
}
</script>

<style>
  .card {
    border: 1px solid black;
    height: 400px;
    width: 200px;
  }
  img{
    width: 200px;
    height: 250px;
  }
</style>
<template>
    <div>
      <ul>
        <li>
        <router-link :to="{ name: 'Detail', params: { id: this.$store.state.id }}">detail</router-link>
        </li>
        <li>
        <router-link :to="{ name: 'Rates', params: { id: this.$store.state.id }}">rates</router-link>
        </li>
      </ul>
      <form action="" @submit.prevent="addRate">
        <p>name</p>
        <input v-model="name" type="text" placeholder="input your name">
        <p>rating</p>
        <input v-model="point" type="number" placeholder="input rating 0-100">
        <button type="submit">Add Rate</button>
      </form>
      <div v-for="rate in rates" :key="rate.id">
        <p>reviewer</p>
        <p>reviewer: {{rate.reviewer}}</p>
        <p>point: {{rate.point}}</p>
        <button @click="deleteRate(rate.id)">delete</button>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      rates: null,
      name: "",
      point: "",
    }
  },
  created() {
    console.log(this.$store.state.id,"<<<")
    axios({
      url: `http://localhost:3000/movies/${this.$store.state.id}`,
      method: 'get'
    })
      .then(movie=>{
        this.rates = movie.data.Rates
        console.log(movie)
      })
      .catch(error=>{
        console.log(error)
      })
  },
  methods: {
    load() {
      axios({
        url: `http://localhost:3000/movies/${this.$store.state.id}`,
        method: 'get'
      })
        .then(movie=>{
          this.rates = movie.data.Rates
          console.log(movie)
        })
        .catch(error=>{
          console.log(error)
        })
    },
    addRate() {
      console.log(this.$store.state.id,this.name,this.point)
      axios({
        method: 'post',
        url: `http://localhost:3000/rates/${this.$store.state.id}`,
        data: {
          reviewer: this.name,
          point: this.point,
        }
      })
        .then(rated=>{
          this.load()
          console.log(rated)
        })
        .catch(error=>{
          console.log(error)
        })
    },
    deleteRate(id) {
      let status = confirm("are you sure want to delete this review?")
      if(status){
        axios({
          method: 'delete',
          url: `http://localhost:3000/rates/${id}`,
        })
          .then(deleted=>{
            this.load()
            console.log(deleted)
          })
          .catch(error=>{
            console.log(error)
          })
      }
    }
  }
}
</script>

<style>

</style>
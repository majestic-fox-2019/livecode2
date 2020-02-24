<template>
  <div class="container box">

    <img :src="poster" alt="">
    <h3>Title: {{title}}</h3>
    <p>{{year}}</p>
    <p>{{type}}</p>
    <button type="button" class="btn btn-success" @click="goEdit()">Edit</button>
    <button type="button" class="btn btn-danger" @click="goRate()">Rating</button>
    
    <div v-if="editStatus">
      <form @submit.prevent='editMovie'>
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
            <option value="series">Series</option>
            <option value="movies">Movie</option>
          </select>
        </div>
        <div class="form-group">
          <label >Poster</label>
          <input type="text" class="form-control" v-model="poster">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>

    <div v-else>
      <h3>Add Rate</h3>
            <form @submit.prevent='addRate'>
        <div class="form-group">
          <label >Reviewer</label>
          <input type="text" class="form-control" v-model="reviewer">
        </div>
        <div class="form-group">
          <label >Point</label>
          <input type="number" class="form-control" v-model="point">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Reviewer</th>
                <th scope="col">Point</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody v-for="data in dataRate" :key="data.id">
              <tr >
                <td>{{data.reviewer}}</td>
                <td>{{data.point}}</td>
                <td><button type="button" class="btn btn-primary" @click="deleteRate(data.id)">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  name: 'Detail',
  data(){
    return{
      title:null,
      year:null,
      type:null,
      poster:null,
      idMovie:this.$route.params.id,
      editStatus:false,
      reviewer:null,
      point:null,
      rateAddStatus:false,
      dataRate:null,
      nampung:false
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
      .catch(err => {
        console.log(err.response)
      })
    },
    editMovie(){
      axios({
        method: 'PUT',
        url: `http://localhost:3000/movies/${this.idMovie}`,
        data: {
          title: this.title,
          year: this.year,
          type: this.type,
          poster: this.poster
        }
      })
      .then(res => {
        this.editStatus = false
        console.log(res.data)
        Swal.fire('movie edited!')
      })
      .catch(err => {
        console.log(err.response)
        let errorMsg = ``
        err.response.data.forEach(element => {
          errorMsg+= element + ", "
        });
        Swal.fire(errorMsg)
      })
    },
    goEdit(){
      this.editStatus = true
    },
     goRate(){
      this.editStatus = false
      this.showRate()
    },
    getAddRate(){
      this.rateAddStatus=true
    },
    addRate(){
      axios({
        method:"POST",
        url:`http://localhost:3000/rates/${this.idMovie}`,
        data:{
          reviewer: this.reviewer,
          point: this.point
        }
      })
      .then(res => {
        console.log(res)
        this.rateAddStatus = false
        this.nampung = true
        Swal.fire('Rate added!')
      })
      .catch(err => {
        console.log("kenapa")
        console.log(err.response)
        let errorMsg = ``
        err.response.data.forEach(element => {
          errorMsg+= element + ", "
        });
        Swal.fire(errorMsg)
      })
    },
    showRate(){
      axios({
        method: "GET",
        url:`http://localhost:3000/rates/${this.idMovie}`,
      })
      .then(res => {
        this.dataRate = res.data
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    deleteRate(id){
      axios({
        method: "DELETE",
        url:`http://localhost:3000/rates/${id}`,
      })
      .then(res => {
        console.log(res)
        this.nampung = true
        Swal.fire('Rate deleted!')
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created(){
    this.getMovie()
    this.showRate()
    
  }, 
  mounted(){
    this.showRate()
    this.getMovie()
  },
  watch(oldVal, newVal){
    if(oldVal !== newVal){
      this.showRate()
    }
  }
}
</script>

<style>

</style>
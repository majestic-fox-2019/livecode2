<template>
  <div class="p-5">
    <form @submit.prevent="addRate" class="pb-4">
      <div class="form-group">
        <label >Reviewer</label>
        <input type="text" class="form-control" v-model='reviewer'>
      </div>
      <div class="form-group">
        <label >Point</label>
        <input type="number" class="form-control" v-model='point'>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <p>Table rates</p>
    <table class="table pt-2">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Reviewer</th>
          <th scope="col">Point</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rate in movie.Rates" :key="rate.id">
          <th scope="row">{{rate.id}}</th>
          <td>{{rate.reviewer}}</td>
          <td>{{rate.point}}</td>
          <td>
            <button @click="deleteRate(rate.id)" class="btn btn-danger">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name:'Rate',
  props:['id'],
  data() {
    return {
      reviewer:'',
      point:''
    }
  },
  methods:{
    addRate() {
      axios({
        method:"post",
        url:`http://localhost:3000/rates/${this.id}`,
        data:{
          reviewer:this.reviewer,
          point:this.point
        }
      })
      .then(res => {
        this.reviewer=''
        this.point=''
        Swal.fire({
          title: 'Success add rate!',
          text: 'success add rate',
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
    deleteRate(id) {
      axios({
        method:"delete",
        url:`http://localhost:3000/rates/${id}`,
      })
      .then(res => {
        Swal.fire({
          title: 'Success delete rate!',
          text: res.data.message,
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
    }
  },
  computed: {
    movie(){
      return this.$store.state.movie
    }
  }
}
</script>

<style>

</style>
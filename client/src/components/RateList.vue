<template>
<div>
  <br>
    <table class="table">
      <thead class="thead-dark text-center">
        <tr>
          <th scope="col">No</th>
          <th scope="col">Reviewer</th>
          <th scope="col">Point</th>
          <th style="width: 10%;" scope="col">Action</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr :key="i" v-for="(rate, i) in rateList">
          <th>{{ i+1 }}</th>
          <td>{{ rate.reviewer }}</td>
          <td>{{ rate.point }}</td>
          <td><button type="button" @click.prevent="deleteRate(rate.id)" class="btn btn-sm btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RateList',
  data(){
    return { 
      rateList : null
    }
  },
  created(){
    this.getMovieDetail()
  },
  methods : {
    getMovieDetail(){
      this.$axios.get(`/movies/${this.$route.params.movieId}`)
      .then(response => {
        this.rateList = response.data.body.Rates
      })
      .catch(err => {
        console.log(err)
      })
    },
    deleteRate(id){
      this.$axios.delete(`/rates/${id}`)
      .then(response => {
        console.log(response)
        this.$swal.fire({
          title : 'Success',
          icon : 'success',
          text : 'Sukses menghapus rate list'
        })        
        this.getMovieDetail()
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <form @submit.prevent="updateMovie($route.params.movieId)">
      <br>
      <div class="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input type="text" class="form-control" v-model="form.title" :class="errorClass.title" placeholder="Put reviewer">
        <div class="invalid-feedback">{{ errorMessage.title }}</div>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Year</label>
        <input type="number" class="form-control" v-model="form.year" :class="errorClass.year" placeholder="Put year">
        <div class="invalid-feedback">{{ errorMessage.year }}</div>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Type</label>
        <select class="form-control" v-model="form.type" :class="errorClass.type">
          <option value="">Choose Movie Type</option> 
          <option value="movie">Movie</option>
          <option value="series">Series</option>
      </select>
        <div class="invalid-feedback">{{ errorMessage.type }}</div>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Poster Url</label>
        <input type="text" class="form-control" v-model="form.poster" placeholder="Put poster url">
      </div>
      <button type="submit" class="btn btn-primary">Update Movie</button>
    </form>
  </div>
</template>

<script>
export default {
  name : 'UpdateMovie',
  data(){
    return {
      form: {
        title: '',
        year: '',
        type: '',
        poster: ''
      },
      errorClass : {
        title: '',
        year: '',
        type: '',
        poster: ''
      },
      errorMessage : {
        title: '',
        year: '',
        type: '',
        poster: ''
      },
      currentImage : ''
    }
  },
  created () {
    this.getMovieDetail()
  },
  methods : {
    getMovieDetail(){
      this.$axios.get(`/movies/${this.$route.params.movieId}`)
      .then(response => {
        this.form.title = response.data.body.title
        this.form.year = response.data.body.year
        this.form.type = response.data.body.type
        this.form.poster = response.data.body.poster
        this.currentImage = response.data.body.poster
      })
      .catch(err => {
        console.log(err)
      })
    },
    updateMovie(id){
      const objValue = {
        title: this.form.title,
        year: this.form.year,
        type: this.form.type,
        poster: this.form.poster === '' ? this.currentImage : this.form.poster
      }

      this.$axios({
        method : 'PUT',
        url : `/movies/${id}`,
        data : objValue
      })
      .then(response => {
        console.log(response)
        this.$swal.fire({
          title : 'Success',
          icon : 'success',
          text : 'Success update movie '+ response.data.body.title
        })
        this.clearValidation()
        this.getMovieDetail()
        this.$parent.getMovieDetail()
      })
      .catch(err => {
        this.getError(err.response.data.message)
      })
    },
    getError(objectError){
      for(let key in objectError){
        this.errorClass[key] = 'is-invalid'
        this.errorMessage[key] = objectError[key]
      }
    },
    clearValidation(){
      this.errorClass.title = ''
      this.errorClass.year = ''
      this.errorClass.type = ''
      this.errorMessage.title = ''
      this.errorMessage.year = ''
      this.errorMessage.type = ''
    }
  }
}
</script>

<style scoped>

</style>
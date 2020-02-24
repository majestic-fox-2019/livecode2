<template>
  <div>
    <form @submit.prevent="addRate($route.params.movieId)">
      <br>
      <div class="form-group">
        <label for="exampleInputEmail1">Reviewer </label>
        <input type="text" class="form-control" v-model="form.reviewer" :class="errorClass.reviewer" placeholder="Put reviewer">
        <div class="invalid-feedback">{{ errorMessage.reviewer }}</div>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Point</label>
        <input type="number" class="form-control" v-model="form.point" :class="errorClass.point" placeholder="Put point between 0 - 100">
        <div class="invalid-feedback">{{ errorMessage.point }}</div>
      </div>
      <button type="submit" class="btn btn-primary">Add Rating</button>
    </form>
  </div>
</template>

<script>
export default {
  name : 'AddRating',
  data(){
    return {
      form: {
        reviewer: '',
        point: ''
      },
      errorClass : {
        reviewer : '',
        point : '',
      },
      errorMessage : {
        reviewer : '',
        point : '',
      }
    }
  },
  methods : {
    addRate(id){
      const value = {
        reviewer: this.form.reviewer,
        point: this.form.point
      }

      this.$axios({
        method : 'post',
        url : `/rates/${id}`,
        data : value
      })
      .then(response => {
        console.log(response)
        this.clearValidation()
        this.$swal.fire({
          title : 'Success',
          icon : 'success',
          text : 'Success menambahkan rating'
        })
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
      this.errorClass.reviewer = ''
      this.errorClass.point = ''
    }
  }
}
</script>

<style scoped>

</style>
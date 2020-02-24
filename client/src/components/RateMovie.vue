<template>
  <div class="container edit-movie-container mt-5">
    <form @submit.prevent="rateMovie()">
      <div class="form-group">
        <label for="rate-reviewer">Your name</label>
        <input
          type="text"
          class="form-control"
          id="rate-reviewer"
          v-model="rateDataForm.reviewer"
        />
      </div>
      <div class="form-group">
        <label for="rate-point">Point</label>
        <input
          type="number"
          class="form-control"
          id="rate-point"
          v-model="rateDataForm.point"
        />
      </div>
      <button type="submit" class="btn btn-primary">Rate Movie</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RateMovie',
  data() {
    return {
      rateDataForm: {
        reviewer: '',
        point: ''
      }
    };
  },
  methods: {
    rateMovie() {
      const movieId = this.$route.params.id;
      this.$axios
        .post(`/rates/${movieId}`, this.rateDataForm)
        .then(({ data }) => {
          this.$store.dispatch('fetchMovies');
          this.$Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
          });
          this.$router.push({ name: 'Home' });
        })
        .catch(err => {
          if (err.response.status === 400) {
            this.$Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.response.data.message
            });
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>

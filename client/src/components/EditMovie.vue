<template>
  <div class="container edit-movie-container mt-5">
    <form @submit.prevent="updateMovie()">
      <div class="form-group">
        <label for="movie-title">Title</label>
        <input
          type="text"
          class="form-control"
          id="movie-title"
          v-model="movieDataForm.title"
        />
      </div>
      <div class="form-group">
        <label for="movie-year">Year</label>
        <input
          type="number"
          class="form-control"
          id="movie-year"
          v-model="movieDataForm.year"
        />
      </div>
      <div class="form-group">
        <label for="movie-type">Type</label>
        <select
          v-model="movieDataForm.type"
          class="form-control"
          id="movie-type"
        >
          <option value="movie" selected>Movie</option>
          <option value="series">Series</option>
        </select>
      </div>
      <div class="form-group">
        <label for="movie-poster">Poster</label>
        <input
          type="text"
          class="form-control"
          id="movie-poster"
          v-model="movieDataForm.poster"
        />
      </div>
      <button type="submit" class="btn btn-primary">Edit Movie</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditMovie',
  data() {
    return {
      movieDataForm: {
        title: this.$store.state.currentMovie.title,
        year: this.$store.state.currentMovie.year,
        type: this.$store.state.currentMovie.type.toLowerCase(),
        poster: this.$store.state.currentMovie.poster
      }
    };
  },
  methods: {
    updateMovie() {
      const movieId = this.$route.params.id;
      this.$axios
        .put(`/movies/${movieId}`, this.movieDataForm)
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
          console.log(err.response);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>

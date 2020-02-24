<template>
  <div>
    <form v-on:submit.prevent="updateMovie" v-if="updated">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" v-model="form.title" />
      </div>
      <div class="form-group">
        <label>Year</label>
        <input type="text" class="form-control" v-model="form.year" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Type</label>
        <select class="form-control" v-model="form.type">
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
      </div>
      <div class="form-group">
        <label>Poster</label>
        <input type="text" class="form-control" v-model="form.poster" />
      </div>
      <div class="form-group">
        <label>IMDB ID</label>
        <input type="text" class="form-control" v-model="form.imdbID" />
      </div>
      <button type="submit" class="btn btn-info">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["form", "updated"],
  methods: {
    updateMovie() {
      this.$axios({
        method: "put",
        url: `${this.$server}/movies/${this.$route.params.movieId}`,
        data: this.form
      })
        .then(result => {
          console.log(result.data);
          this.$Swal.fire({
            icon: "success",
            title: `Successfully update ${result.data.title}`,
            showConfirmButton: false,
            timer: 1500
          });
          this.$emit("closeForm");
          this.$emit("doneUpdate", result.data);
        })
        .catch(err => {
          console.log(err.response);
          this.$Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data[0].message
          });
        });
    }
  }
};
</script>

<style>
</style>
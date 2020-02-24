<template>
  <div>
    <div v-if="msg" class="alert alert-danger">{{msg}}</div>
    <form @submit.prevent="updateMovie" v-if="movie">
      <div class="form-group">
        <label>Title</label>
        <input type="text" v-model="movie.title" class="form-control" />
      </div>
      <div class="form-group">
        <label>Year</label>
        <input type="number" v-model="movie.year" class="form-control" />
      </div>
      <select class="custom-select" @change="onChange">
        <option selected>Choose...</option>
        <option value="series">Series</option>
        <option value="movie">Movie</option>
      </select>
      <div class="form-group">
        <label>Poster</label>
        <input type="text" v-model="movie.poster" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import api from "../helper/api";
export default {
  data() {
    return { movie: null, msg: null };
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    updateMovie() {
      const value = {
        title: this.movie.title,
        yearL: this.movie.year,
        type: this.movie.type,
        poster: this.movie.poster
      };
      api
        .put(`/movies/${this.$route.params.id}`, value)
        .then(({ data }) => {
          this.$emit("success");
        })
        .catch(err => {
          this.msg = err.response.data.message;
        });
    },
    onChange(e) {
      this.movie.type = e.target.value;
    },
    getMovie() {
      api
        .get(`/movies/${this.$route.params.id}`)
        .then(({ data }) => {
          this.movie = data;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
<template>
  <div>
    <form method="POST" v-on:submit.prevent="updateMovie">
      <div class="form-group">
        <label for="exampleInputEmail1">title</label>
        <input
          v-model="form.title"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">year</label>
        <input v-model="form.year" type="number" class="form-control" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">type</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="form.type"
        >
          <option value="movie">movie</option>
          <option value="series">series</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">poster</label>
        <input v-model="form.poster" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">imdbID</label>
        <input type="text" class="form-control" v-model="form.imdbID" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "editMovie",
  props: ["movie"],
  data() {
    return {
      form: {
        title: this.movie.title,
        year: this.movie.year,
        type: this.movie.type,
        poster: this.movie.poster,
        imdbID: this.movie.imdbID
      }
    };
  },
  methods: {
    updateMovie() {
      axios({
        method: "put",
        url: `http://localhost:3000/movies/${this.$route.params.id}`,
        data: this.form
      })
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Movie has been updated",
            showConfirmButton: false,
            timer: 1500
          });
          this.$store.dispatch("findMovie", this.$route.params.id);
          this.$emit("showRate");
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.responseText}`
          });
        });
    }
  }
};
</script>

<style></style>

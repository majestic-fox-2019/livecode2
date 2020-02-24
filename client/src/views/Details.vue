<template>
  <div>
    <div class="container">
      <div class="card mb-3 mt-3">
        <!-- IMAGE -->
        <img class="card-img-top mx-auto" :src="movie.poster" />
        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
          <p class="card-text">Year: {{ movie.year}}</p>
          <p class="card-text">Type: {{ movie.type}}</p>
          <a :href="`https://www.imdb.com/title/${movie.imdbID}`">IMDB</a>
          <br />
          <br />
          <button type="button" class="btn btn-secondary" @click="showForm">Edit</button>
        </div>
        <div class="container">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Title</label>
              <input type="text" class="form-control" v-model="selected.title" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Year</label>
              <input type="text" class="form-control" v-model="selected.year" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Type</label>
              <br />
              <select v-model="selectedType">
                <option>Series</option>
                <option>Movie</option>
              </select>
            </div>
            <br />
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      movie: null,
      selectedType: null,
      selected: {
        title: null,
        year: null
      },
      formStatus: false
    };
  },
  methods: {
    selectedData() {
      let id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/movies/${id}`)
        .then(response => {
          this.movie = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    showForm() {
      if (this.formStatus) {
        this.formStatus = false;
      } else {
        this.formStatus = true;
        this.selectedData();
        this.selected = {
          title: this.movie.title,
          year: this.movie.year
        };
      }
    }
  },
  created() {
    this.selectedData();
  }
};
</script>

<style>
img {
  max-width: 300px;
  max-height: 300px;
}
</style>
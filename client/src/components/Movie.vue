<template>
  <div id="dashboard">
    <button type="button" class="btn btn-info" @click="allMovies">Home</button>
    <div v-for="(movie, index) in movies" :key="index" class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src class="card-img" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{movie.title}}</h5>
            <p class="card-text">{{movie.imdbID}}</p>
            <p class="card-text">{{movie.year}}</p>
            <p class="card-text">type</p>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Type</label>
              <select class="form-control">
                <option value="1">Movie</option>
                <option value="2">Series</option>
              </select>
            </div>
            <button type="button" class="btn btn-info">Rate</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const server = "http://localhost:3000";
export default {
  data() {
    return {
      movies: []
    };
  },

  methods: {
    allMovies() {
      // this.$store.state.movies;
      let film = null;
      axios({
        method: "get",
        url: `${server}/movies`
      })
        .then(result => {
          console.log(result.data);
          this.movies.push(result.data);
        })
        .catch(err => {
          console.log(err);
        });
      film = this.movies;
    }
  }
};
</script>



<style  scoped>
#dashboard {
  width: 500px;
  justify-items: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>


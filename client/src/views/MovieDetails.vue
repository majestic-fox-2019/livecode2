<template>
  <div>
    <div class="detailcontent">
      <!-- card -->
      <div class="card" style="width: 18rem;" v-if="movie">
        <img :src="movie.poster" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{{movie.title}}</h5>
          <p class="card-text">{{movie.year}}</p>
          <p class="card-text">{{movie.type}}</p>
          <p class="card-text">{{movie.imdbID}}</p>
          <button class="btn btn-info">Edit</button>
        </div>
      </div>

      <!-- editform -->
      <form v-on:submit.prevent="updateMovie">
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

    <!-- rating -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Reviewer</th>
          <th scope="col">Point</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: null,
      form: {
        title: null,
        year: null,
        type: null,
        poster: null,
        imdbID: null
      }
    };
  },
  created() {
    this.getOneMovie();
  },
  methods: {
    getOneMovie() {
      this.$axios({
        method: "get",
        url: `${this.$server}/movies/${this.$route.params.movieId}`
      })
        .then(result => {
          this.movie = result.data;
          this.form = { ...result.data };
        })
        .catch(err => {
          console.log(err.response);
        });
    },
    updateMovie() {
      this.$axios({
        method: "put",
        url: `${this.$server}/movies/${this.$route.params.movieId}`,
        data: this.form
      })
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  }
};
</script>

<style>
.detailcontent {
  display: flex;
  justify-content: space-around;
}
.table {
}
</style>
<template>
  <div class="card-movie">
    <div class="card" style="width: 18rem;"
    v-for="(movie, idx) in findAllMovies()" :key="idx">
  <img class="card-img-top" :src="movie.poster" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{movie.title}}</h5>
    <hr>
    <p class="card-text">{{movie.year}}</p>
    <hr>
    <h5 class="card-text">Type {{movie.type}}</h5>
    <router-link :to="`/rate/${movie.id}`"><a href="#" class="btn btn-secondary">
    Movie Rate</a></router-link> | <button @click="findOne(movie.id)" type="button"
    class="btn btn-primary" data-toggle="modal"
      data-target="#updateMovies">Edit Movies</button>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="updateMovies" tabindex="-1"
role="dialog" aria-labelledby="updateMoviesTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="updateMoviesTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <form @submit.prevent="updateMovie">
      <div class="modal-body">
  <div class="form-group">
    <label for="reviewer">Title</label>
    <input v-model="formUpdate.title" type="text"
    class="form-control" placeholder="Enter your name">
  </div>
  <div class="form-group">
    <label for="reviewer">Year</label>
    <input v-model="formUpdate.year" type="number"
    class="form-control" placeholder="Enter your name">
  </div>
  <div class="form-group">
    <label for="reviewer">Poster</label>
    <input v-model="formUpdate.poster" type="text"
    class="form-control" placeholder="Enter your name">
  </div>
  <div class="form-group">
    <label for="reviewer">Type</label>
    <select v-model="formUpdate.type" class="form-control">
      <option value="movie">Movie</option>
      <option value="series">Series</option>
    </select>
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
</form>
    </div>
  </div>
</div>

  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'Card',
  data() {
    return {
      baseUrl: 'http://localhost:3000',
      movies: null,
      formUpdate: {
        title: null,
        year: null,
        poster: null,
        type: null,
      },
      movieId: null,
    };
  },
  methods: {
    findAllMovies() {
      return this.$store.state.movies;
    },
    findOne(id) {
      axios.get(`${this.baseUrl}/movies/${id}`)
        .then((movie) => {
          this.formUpdate.title = movie.data.title;
          this.formUpdate.year = movie.data.year;
          this.formUpdate.poster = movie.data.poster;
          this.formUpdate.type = movie.data.type;
          this.movieId = movie.data.id;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateMovie() {
      axios.put(`${this.baseUrl}/movies/${this.movieId}`, {
        title: this.formUpdate.title,
        year: this.formUpdate.year,
        poster: this.formUpdate.poster,
        type: this.formUpdate.type,
      })
        .then((result) => {
          window.$('#updateMovies').modal('hide');
          console.log(result.data);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: 'success',
            title: 'Update Successfull',
          });
          this.$store.dispatch('findAllMovies');
        })
        .catch((err) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: `${err.response.data.errors}`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
  },
};
</script>

<style scoped>
.card-movie {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px;
  flex-wrap: wrap;
}

.card {
  margin: 20px;
}
</style>

<template>
  <div>
    <router-link :to="{name: 'Home'}">
      <button type="button" class="btn btn-primary">Back</button>
    </router-link>

    <div class="container">
      <div class="card mb-3 mt-3">
        <!-- IMAGE -->
        <img class="card-img-top mx-auto" :src="movie.poster" />
        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
          <p class="card-text">Year: {{ movie.year}}</p>
          <p class="card-text">Type: {{ movie.type}}</p>
          <a :href="`https://www.imdb.com/title/${movie.imdbID}`">IMDB</a>
          <h4>Rating:</h4>
          <div class="card-text" v-for="rate in movie.Rates" :key="rate.id">
            <div class="mt-2">
              Reviewer: {{ rate.reviewer }}, Points: {{ rate.point }}
              <button
                type="button"
                class="btn btn-danger btn-sm"
                @click="deleteRating(rate.id)"
              >Delete</button>
            </div>
          </div>
          <br />
          <br />
          <button type="button" class="btn btn-secondary" @click="showForm">Edit</button>
        </div>
        <div class="container">
          <form v-show="formStatus" @submit.prevent="submitEdit">
            <div class="form-group">
              <label for="exampleInputEmail1">Title</label>
              <input type="text" class="form-control" v-model="selected.title" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Year</label>
              <input type="text" class="form-control" v-model="selected.year" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Poster</label>
              <input type="text" class="form-control" v-model="selected.poster" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">IMDB</label>
              <input type="text" class="form-control" v-model="selected.imdbID" />
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
          <br />
          <br />
          <form @submit.prevent="addRating">
            <div class="form-group">
              <label for="exampleInputEmail1">Reviewer</label>
              <input type="text" class="form-control" v-model="rate.reviewer" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Points</label>
              <input type="number" class="form-control" v-model="rate.point" />
            </div>
            <button type="submit" class="btn btn-primary">Add Rating</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      movie: null,
      selectedType: null,
      selected: {
        title: null,
        year: null,
        poster: null,
        imdbID: null
      },
      rate: {
        reviewer: null,
        point: null
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
          year: this.movie.year,
          poster: this.movie.poster,
          imdbID: this.movie.imdbID
        };
      }
    },
    submitEdit() {
      let id = this.$route.params.id;

      let updateData = {
        title: this.selected.title,
        year: this.selected.year,
        poster: this.selected.poster,
        imdbID: this.selected.imdbID,
        type: this.selectedType
      };

      axios
        .put(`http://localhost:3000/movies/${id}`, updateData)
        .then(res => {
          console.log(res.data);
          this.selectedData();
          this.showForm();

          Swal.fire("Success!", `${res.data.title} Updated!`, "success");
        })
        .catch(error => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message
          });
        });
    },
    addRating() {
      let id = this.$route.params.id;

      let rateData = {
        reviewer: this.rate.reviewer,
        point: this.rate.point
      };

      axios
        .post(`http://localhost:3000/rate/${id}`, rateData)
        .then(res => {
          console.log(res.data);
          this.selectedData();
          Swal.fire(
            "Success!",
            `${res.data.reviewer} rated the movie by ${res.data.point} Points!`,
            "success"
          );
        })
        .catch(error => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message
          });
        });
    },
    deleteRating(id) {
      axios
        .delete(`http://localhost:3000/rate/${id}`)
        .then(res => {
          console.log(res.data);
          this.selectedData();
          Swal.fire("Success!", `Data Deleted`, "success");
        })
        .catch(err => {
          console.log(err);
        });
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
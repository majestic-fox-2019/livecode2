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
          <button class="btn btn-info" @click="updated = true">Edit</button>
          <button class="btn btn-warning" @click="inputrating = true">Add Rating</button>
        </div>
      </div>

      <!-- editform -->
      <updateForm
        :form="form"
        :updated="updated"
        @closeForm="updated = false"
        @doneUpdate="doneUpdate"
      />

      <!-- addrating -->
      <addRating
        :inputrating="inputrating"
        @closeFormRating="inputrating = false"
        @doneAddRating="doneAddRating"
      />
    </div>

    <!-- rating -->
    <ratingTable :rates="rates" @deleted="doneDelete" />
  </div>
</template>

<script>
import ratingTable from "../components/ratingsTable";
import updateForm from "../components/editForm";
import addRating from "../components/addRating";

export default {
  components: {
    ratingTable,
    updateForm,
    addRating
  },
  data() {
    return {
      movie: null,
      rates: null,
      form: {
        title: null,
        year: null,
        type: null,
        poster: null,
        imdbID: null
      },
      updated: false,
      inputrating: false
    };
  },
  mounted() {
    this.getOneMovie();
  },
  methods: {
    getOneMovie() {
      this.$axios({
        method: "get",
        url: `${this.$server}/movies/${this.$route.params.movieId}`
      })
        .then(result => {
          console.log(result.data.Rates);
          this.movie = result.data;
          this.rates = result.data.Rates;
          this.form = { ...result.data };
        })
        .catch(err => {
          this.$Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response
          });
        });
    },
    doneUpdate() {
      this.getOneMovie();
    },
    doneDelete(result) {
      this.$Swal.fire({
        icon: "success",
        title: result.message,
        showConfirmButton: false,
        timer: 1500
      });
      this.getOneMovie();
    },
    doneAddRating() {
      this.getOneMovie();
    }
  }
};
</script>

<style>
.detailcontent {
  display: flex;
  justify-content: space-around;
}
h3 {
  margin-top: 10px;
}
</style>
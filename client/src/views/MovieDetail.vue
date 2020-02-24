<template>
  <div>
    <h1>{{movieDetail.title}}</h1>
    <h3>Category: {{movieDetail.type}}</h3>
    <div class="row">
      <div class="col-6 mt-4">
        <div class="d-flex flex-column">
          <div class="col-6">
            <img :src="movieDetail.poster" alt="movie poster" style="max-width: 540px;" />
          </div>
          <div class="col-6">
            <div
              class="btn btn-outline-primary mt-3"
              v-b-modal="'editModal'+ movieDetail.id"
            >Update Movie</div>
          </div>
        </div>
      </div>
      <div class="col-6 mt-4">
        <rating v-for="rate of rates" :key="rate.id" :detailRate="rate" @abisDelete="getDetail"></rating>
      </div>
    </div>

    <div>
      <div class="d-flex flex-column">
        <h1>Post a review</h1>
        <b-form @submit="postRating">
          <b-form-group id="reviewer" label="Your name" label-for="reviewerid">
            <b-form-input id="reviewerid" v-model="reviewer" type="text" required></b-form-input>
          </b-form-group>
          <b-form-group id="point" label="Your point" label-for="point">
            <b-form-input id="point" v-model="point" type="number" required></b-form-input>
          </b-form-group>
          <b-button variant="primary" type="submit">Post</b-button>
        </b-form>
      </div>
    </div>

    <b-modal :id="'editModal'+movieDetail.id" title="BootstrapVue" hide-footer>
      <!-- <p class="my-4">Hello from modal!</p> -->
      <b-form @submit="onSubmit">
        <b-form-group id="updateTitle" label="Title" label-for="input-1">
          <b-form-input id="input-1" v-model="title" type="text" required></b-form-input>
        </b-form-group>
        <b-form-group id="updateYear" label="Year" label-for="input-2">
          <b-form-input id="input-2" v-model="year" type="text" required></b-form-input>
        </b-form-group>
        <b-form-group id="updatePoster" label="Poster" label-for="input-3">
          <b-form-input id="input-3" v-model="poster" type="text" required></b-form-input>
        </b-form-group>

        <b-form-group>
          <b-form-select v-model="type" :options="options"></b-form-select>
        </b-form-group>
        <b-button class="btn btn-primary" variant="primary" type="submit">Update</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import rating from "../components/Rating";
export default {
  name: "Detail Movie",
  components: {
    rating
  },
  data() {
    return {
      title: "hehe",
      year: "",
      poster: "",
      type: "",
      options: [
        { value: "series", text: "Series" },

        { value: "movie", text: "Movie" }
      ],
      reviewer: "",
      point: null,
      rates: null
    };
  },
  methods: {
    getDetail() {
      let id = this.$route.params.id;
      this.$store.dispatch("getMovieDetail", id).then(() => {
        this.title = this.$store.state.movieDetail.title;
        this.year = this.$store.state.movieDetail.year;
        this.poster = this.$store.state.movieDetail.poster;
        this.type = this.$store.state.movieDetail.type;
        this.rates = this.$store.state.movieDetail.Ratings;
      });
    },
    onSubmit(evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form))
      let objUpdate = {
        title: this.title,
        year: this.year,
        poster: this.poster,
        type: this.type,
        id: this.movieDetail.id
      };

      // console.log(objUpdate, "<<");
      this.$store.dispatch("updateMovie", objUpdate).then(() => {
        this.$bvModal.hide("editModal" + objUpdate.id);
      });
    },
    postRating(e) {
      //   console.log("masuk");
      e.preventDefault();
      let objRate = {
        movieId: this.$route.params.id,
        reviewer: this.reviewer,
        point: this.point
      };
      console.log(objRate, "<<< ini post rating");
      this.$store.dispatch("postRating", objRate).then(() => {
        this.getDetail();
      });
    }
  },
  mounted() {
    // console.log("halo");
    this.getDetail();
  },
  computed: {
    movieDetail() {
      //   this.title = this.$store.state.movieDetail;
      return this.$store.state.movieDetail;
    },
    paramsId() {
      return this.$route.params.id;
    }
  },
  watch: {
    movieDetail(o, n) {
      //   this.getDetail();
      if (o !== n) {
        // this.getDetail();
      }
    }
  }
};
</script>

<style>
</style>
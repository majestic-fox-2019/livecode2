<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <img :src="movie.poster" alt style="max-height :50%" />
      </div>
      <div class="col">
        <div class="row">
          <h2>Title : {{movie.title}}</h2>
        </div>
        <div class="row">
          <div>
            <b-button v-b-modal.modal-1>Add Rating</b-button>

            <b-modal id="modal-1" title="BootstrapVue" hide-footer>
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Reviewer</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    v-model="reviewer"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Points</label>
                  <input
                    v-model="points"
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <button @click.prevent="addRating()" type="submit" class="btn btn-primary">Submit</button>
              </form>
            </b-modal>
          </div>
          <div>
            <div>
              <b-button v-b-modal.modal-2>Edit Movie</b-button>
              <b-modal id="modal-2" title="BootstrapVue" hide-footer>
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    <input
                      v-model="title"
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Year</label>
                    <input
                      v-model="year"
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Poster</label>
                    <input
                      v-model="year"
                      type="string"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Type</label>
                    <select v-model="type" class="form-control" id="exampleFormControlSelect1">
                      <option>movie</option>
                      <option>series</option>
                    </select>
                  </div>
                  <button @click="updateMovie()" type="submit" class="btn btn-primary">Submit</button>
                </form>
              </b-modal>
            </div>
          </div>
        </div>
        <div class="row" v-for="(rate, index) in rating" :key="index">
          <Rating :content="rate"></Rating>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Rating from "../components/Rating";
export default {
  components: {
    Rating
  },
  name: "Detail",
  created() {
    this.getMovies();
  },
  data() {
    return {
      title: "",
      year: "",
      poster: "",
      type: "",
      reviewer: "",
      points: ""
    };
  },
  methods: {
    updateMovie() {
      const body = {
        id: this.$route.params.id,
        title: this.title,
        year: this.year,
        poster: this.poster,
        type: this.type
      };
      // console.log(body);
      this.$store.dispatch("updateMovie", body);
      this.$bvModal.hide("modal-2");
    },
    addRating() {
      const body = {
        reviewer: this.reviewer,
        points: this.points,
        MovieID: this.$route.params.id
      };
      this.$store.dispatch("addRating", body);
      this.$bvModal.hide("modal-1");
    },
    getMovies() {
      this.$store.dispatch("getMovies", this.$route.params.id);
      this.$store.dispatch("fetchMovie");
    }
  },
  computed: {
    movie() {
      this.title = this.$store.state.movie.title;
      this.year = this.$store.state.movie.year;
      this.poster = this.$store.state.movie.poster;
      this.type = this.$store.state.movie.type;
      console.log(this.$store.state.movie, "okkkk");
      return this.$store.state.movie;
    },
    rating() {
      return this.$store.state.movie.Ratings;
    }
  }
};
</script>
<template>
  <b-container>
    <b-row>
      <b-col cols="12" class="justify-content-center">
        <b-button variant="primary" to="/">Back</b-button>
      </b-col>
    </b-row>
    <b-card no-body class="overflow-hidden" v-if="getMovie !== null">
      <b-row no-gutters>
        <b-col md="4">
          <b-card-img :src="getMovie.poster" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="8">
          <b-tabs content-class="mt-3">
            <!-- Rate Tab -->
            <b-tab title="Rate" active>
              <b-row>
                <b-col
                  cols="12"
                  v-for="rates in getMovie.Rates"
                  :key="rates.id"
                >
                  <p>Reviewer: {{ rates.reviewer }}</p>
                  <p>Point: {{ rates.point }}</p>
                  <b-button
                    variant="danger"
                    @click.prevent="deleteRate(rates.id)"
                    >Delete</b-button
                  >
                  <hr />
                </b-col>
              </b-row>
            </b-tab>
            <!-- Add Rate -->
            <b-tab title="Add Rate">
              <form @submit.prevent="addRate">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    v-model="reviewer.name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    class="form-control"
                    placeholder="Name"
                    v-model="reviewer.point"
                  />
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
              </form>
            </b-tab>
            <!-- Update Movie -->
            <b-tab title="Update Movie">
              <form @submit.prevent="updateMovie">
                <div class="form-group">
                  <label>Title</label>
                  <input type="text" class="form-control" v-model="movie.title">
                </div>
                <div class="form-group">
                  <label>Year</label>
                  <input type="number" class="form-control" v-model="movie.year">
                </div>
                <div class="form-group">
                  <label>Type</label>
                  <input type="text" class="form-control" disabled>
                </div>
                <div class="form-group">
                  <label>Poster</label>
                  <input type="text" class="form-control" v-model="movie.poster">
                </div>
                <button type="submit" class="btn btn-outline-primary">Update</button>
              </form>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "MovieDetail",
  beforeCreate() {
    const vm = this;
    vm.$store.dispatch("get movie", vm.$route.params.movieId);
  },
  data() {
    return {
      reviewer: {
        name: null,
        point: 0
      },
      movie: {}
    };
  },
  computed: {
    ...mapGetters(["getMovie"])
  },
  methods: {
    deleteRate(rateId) {
      const vm = this;
      vm.$store.dispatch("delete rate", {
        rateId,
        movieId: vm.$route.params.movieId
      });
    },
    addRate() {
      const vm = this;
      // console.log(vm.reviewer);
      axios({
        url: `/rates/${vm.$route.params.movieId}`,
        method: "post",
        data: {
          reviewer: vm.reviewer.name,
          point: vm.reviewer.point
        }
      })
        .then(() => {
          vm.$store.dispatch("get movie", vm.$route.params.movieId);
        })
        .catch(err => {
          console.error(err);
        });
    },
    updateMovie() {
      const vm = this;
      axios({
        url: `/movies/${vm.$route.params.movieId}`,
        method: "put",
        data: {
          title: vm.movie.title,
          year: vm.movie.year,
          type: vm.movie.type,
          poster: vm.movie.poster
        }
      })
      .then(() => {
        vm.$store.dispatch("get movie", vm.$route.params.movieId);
      }).catch((err) => {
        console.error(err);
      });
    }
  },
  created() {
    const vm = this;
    vm.movie = vm.getMovie;
  }
};
</script>

<style></style>

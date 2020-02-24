<template>
  <div class="home">
    <b-jumbotron header="Welcom to Movie Reviewer">
      <form @submit.prevent="search">
        <div class="form-group">
          <input type="text" class="form-control" v-model="q" />
        </div>
        <button class="btn btn-success">Search</button>
      </form>
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col
          class="mb-5"
          cols="12"
          v-for="movie in getAllMovie"
          :key="movie.id"
        >
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img
                  :src="movie.poster"
                  class="rounded-0 img-fluid"
                ></b-card-img>
              </b-col>
              <b-col md="8">
                <b-card-body class="text-center p-5">
                  <b-card-text class="p-5">
                    <h4 class="display-4">{{ movie.title }}</h4>
                    <p class="lead">{{ movie.year }}</p>
                    <div class="mb-4">
                      <a
                        :href="`https://www.imdb.com/title/${movie.imdbID}`"
                        target="_blank"
                      >
                        <b-button variant="outline-primary">IMDB</b-button>
                      </a>
                    </div>
                    <div>
                      <b-button :to="`/${movie.id}`">
                        Details
                      </b-button>
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
// import axios from 'axios';

export default {
  name: "Home",
  beforeCreate() {
    const vm = this;
    vm.$store.dispatch("get all movie");
  },
  data() {
    return {
      q: ""
    };
  },
  computed: {
    ...mapGetters(["getAllMovie"])
  },
  methods: {
    search() {

    }
  }
};
</script>

<template>
  <div v-if="getMovie()" class="container movie-detail-container">
    <div class="card movie-card" style="width: 18rem;">
      <img
        :src="getMovie().poster"
        class="card-img-top"
        :alt="getMovie().title"
      />
      <div class="card-body">
        <h5 class="card-title">{{ getMovie().title }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ getMovie().year }}</li>
        <li class="list-group-item">{{ getMovie().type.toUpperCase() }}</li>
      </ul>
      <div class="card-body">
        <a
          :href="`https://www.imdb.com/title/${getMovie().imdbID}`"
          class="card-link"
          target="_blank"
          >IMDb</a
        >
      </div>
    </div>

    <div class="action-container">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Edit Movie'}">
            Edit Movie
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Rate Movie'}">
            Rate Movie
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Rate List'}">
            Movie Ratings
          </router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fetchMovie() {
      const movieId = this.$route.params.id;
      this.$axios
        .get(`/movies/${movieId}`)
        .then(({ data }) => {
          const movie = data.movie;
          this.$store.dispatch('setCurrentMovie', movie);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getMovie() {
      return this.$store.state.currentMovie;
    }
  },
  created() {
    this.fetchMovie();
  }
};
</script>

<style lang="scss" scoped>
.movie-detail-container {
  display: flex;
  justify-content: space-around;
}
</style>

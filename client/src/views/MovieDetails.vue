<template>
  <div class="MovieDetails">
      <h1>{{$store.state.movieDetails.title}}</h1>
      <div class="movieInfo">
          <div class="moviePoster">
              <img class="posterImg" :src="$store.state.movieDetails.poster" alt="movie poster">
          </div>
          <div class="movieDetailsInfo">
              <div class="top">
                <h2 style="margin-bottom:0;">Year</h2>
                <h3 style="margin:0;">{{$store.state.movieDetails.year}}</h3>
                <h2 style="margin-bottom:0;">Type</h2>
                <h3 style="margin:0;">{{$store.state.movieDetails.type}}</h3>
                <h2 style="margin-bottom:0;">IMDB</h2>
                <a :href="'https://www.imdb.com/title/' + $store.state.movieDetails.imdbID">{{$store.state.movieDetails.imdbID}}</a>
                <div class="buttons">
                    <button class="detailButton" @click.prevent="toMovieRating">See Ratings</button>
                    <button class="detailButton" @click.prevent="toAddRate">Add Rating</button>
                    <button class="detailButton" @click.prevent="toEditMovie">Edit</button>
                </div>
              </div>
              <div class="bottom">
                  <router-view/>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  methods: {
      toMovieRating () {
        this.$router.push(`/movie/${this.$route.params.id}/ratings`)
      },
      toAddRate () {
        this.$router.push(`/movie/${this.$route.params.id}/addRate`)
      },
      toEditMovie () {
        this.$router.push(`/movie/${this.$route.params.id}/edit`)
      }
  },
  created () {
    this.$store.dispatch('FetchMovieDetails', {
        id: this.$route.params.id
    })
    this.$router.push((`/movie/${this.$route.params.id}/ratings`))
  }
}
</script>

<style scoped>
.top {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.detailButton {
    border: none;
    background-color: #b8dcfb;
    width: 6vw;
    height: 5vh;
    border-radius: 10px;
    margin-right: 3%;
    cursor: pointer;
}
.detailButton:hover {
    background-color: #9dbcd8;
}
.buttons {
    display: flex;
    justify-content: start;
    margin-top: 10%;
}
.movieDetailsInfo {
    width: 30%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    margin-left: 5%;
}
.posterImg {
    height: 100%;
    width: 100%;
    object-fit: contain;
}
.moviePoster {
    height: 100%;
    width: 50%;
}
.movieInfo {
    width: 90%;
    height: 60vh;
    display: flex;
}
.MovieDetails {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
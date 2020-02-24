<template>
  <div class="container">
    <h1>Batman</h1>
    <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Search Title</label>
          <input
            v-model="key"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col-4" v-for="(movie, index) in filteredList" :key="index">
        <Cards :content="movie"></Cards>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from "../components/MovieCard";

export default {
  data() {
    return {
      key: ""
    };
  },
  components: {
    Cards
  },
  name: "Home",
  created() {
    this.$store.dispatch("fetchMovie");
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
    filteredList() {
      return this.movies.filter(post => {
        return post.title.toLowerCase().includes(this.key.toLowerCase());
      });
    }
  }
};
</script>

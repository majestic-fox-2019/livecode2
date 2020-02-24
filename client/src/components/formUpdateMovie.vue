<template>
  <div>
    <div class="card-header">Update Your Movie</div>
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            v-model="$store.state.movie.title"
            type="text"
            class="form-control"
            id="title"
            required
          />
        </div>
        <div class="form-group">
          <label for="year">Year</label>
          <input v-model="$store.state.movie.year" type="number" class="form-control" id="year" />
        </div>
        <div class="form-group">
          <label for="year">Year</label>
          <input v-model="$store.state.movie.imdbID" type="string" class="form-control" id="year" />
        </div>
        <div class="form-group">
          <label for="type">Type</label>
          <input v-model="$store.state.movie.type" type="text" class="form-control" id="type" />
        </div>
        <div class="form-group">
          <label for="poster">Poster</label>
          <input v-model="$store.state.movie.poster" type="text" class="form-control" id="poster" />
        </div>
        <button @click.prevent="editMovie" type="submit" class="btn btn-dark">Edit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    editMovie() {
      this.$store.dispatch("editMovie");
    }
  }
};
</script>

<style>
</style>
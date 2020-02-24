<template>
<div>
<form class="container w-75">
    <input type="number" class="form-control" id="inputId" v-model="id" readonly>
  <div class="form-group">
    <label for="inputTitle">Title</label>
    <input type="text" class="form-control" id="inputTitle" v-model="title">
  </div>
  <div class="form-group">
    <label for="inputYear">Year</label>
    <input type="number" class="form-control" id="inputYear" v-model="year">
  </div>
  <div class="form-group">
    <label for="inputimdbID">imdbID</label>
    <input type="text" class="form-control" id="inputimdbID" v-model="imdbID">
  </div>
  <div class="form-group">
    <label for="inputPoster">Poster</label>
    <input type="text" class="form-control" id="inputPoster" v-model="poster">
  </div>
  <div class="form-group">
    <label for="inputType">Type</label>
    <input type="text" class="form-control" id="inputType" v-model="type">
  </div>
  <button type="submit" class="btn btn-primary" v-on:click.prevent="saveMovie">Submit</button>
</form>
</div>
</template>

<script>
export default {
    name: 'movieid',
    data() {
        return {
            id: 0,
            title: '',
            year: 0,
            imdbID: '',
            poster: '',
            type: '',
        }
    },
    created() {
        this.$store.dispatch('getOneMovie', this.$route.params.id)
    },
    mounted() {
        if(this.$store.state.movie != null) {
            this.id = Number(this.$route.params.id)
            this.title = this.$store.state.movie.title
            this.year = this.$store.state.movie.year
            this.imdbID = this.$store.state.movie.imdbID
            this.poster = this.$store.state.movie.poster
            this.type = this.$store.state.movie.type
        }
    },
    methods: {
        saveMovie() {
            let payload = { 
                id: this.id,
                title: this.title,
                year: this.year,
                imdbID: this.imdbID,
                poster: this.poster,
                type: this.type
            } 
            this.$store.dispatch('saveMovie', payload)
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>
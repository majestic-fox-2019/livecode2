<template>
  <div>
      <h1>Edit This Movie</h1>
      <form @submit.prevent="editMovie">
          <label class="inputLabel" for="Title">Title:</label>
          <br>
          <input required class="inputBox" type="text" id="title" v-model="form.title">
          <br>
          <label class="inputLabel" for="year">Year:</label>
          <br>
          <input required class="inputBox" type="number" id="year" v-model="form.year">
          <br>
          <label class="inputLabel" for="imdbId">IMDB ID:</label>
          <br>
          <input required class="inputBox" type="text" id="imdbId" v-model="form.imdbId">
          <br>
          <label class="inputLabel" for="type">Type:</label>
          <br>
            <select required class="inputBox" id="type" name="TypeList">
                <option v-for="(type, i) in types" :key="i" :value="type.name">{{type.display}}</option>
            </select>
          <br>
          <label class="inputLabel" for="poster">Poster:</label>
          <br>
          <input required class="inputBox" type="text" id="poster" v-model="form.poster">
          <br>
          <button class="editButton" type="submit">Edit Movie</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'EditMovie',
  data () {
    return {
      form: {
        title: '',
        year: '',
        imdbId: '',
        type: '',
        poster: ''
      },
      types: []
    }
  },
  methods: {
    editMovie () {
        this.$store.dispatch('editMovie', {
            title: this.form.title,
            year: this.form.year,
            imdbID: this.form.imdbId,
            type: this.form.type,
            poster: this.form.poster,
            movieId: this.$route.params.id
        })
    }
  },
  created () {
    this.form.title = this.$store.state.movieDetails.title
    this.form.year = this.$store.state.movieDetails.year
    this.form.imdbId = this.$store.state.movieDetails.imdbID
    this.form.type = this.$store.state.movieDetails.type
    this.form.poster = this.$store.state.movieDetails.poster
    if (this.form.type == 'movie') {
        this.types.push({
            name: this.form.type,
            display: this.form.type.charAt(0).toUpperCase() + this.form.type.slice(1)
        },{
           name: 'series',
            display: 'Series' 
        })
    } else if (this.form.type == 'series') {
        this.types.push({
            name: this.form.type,
            display: this.form.type.charAt(0).toUpperCase() + this.form.type.slice(1)
        },{
           name: 'movie',
            display: 'Movies' 
        })
    }
  }
}
</script>

<style scoped>
.editButton {
    width: 6vw;
    height: 5vh;
    border: none;
    border-radius: 10px;
    background-color: #fbc45e;
    margin-top: 2%;
    margin-bottom: 2%;
}
.editButton:hover {
    background-color: #b89045;
}
.inputLabel {
    font-size: 1em;
    font-weight: bold;
}
.inputBox {
    width: 30vw;
    height: 5vh;
    border-radius: 10px;
    border: none;
    background-color: #c1c1c1;
    padding: 2%;
    font-size: 1em;
}
</style>
<template>
<div class='cardmovies'>
  <v-container v-if="showMovies"> 
    <v-card v-for="data in datas" :key="data.id"
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="data.poster"
    >
      <v-card-title>{{data.title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{data.type}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{data.year}}</div>

      <div>{{data.title}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        @click="showUpdate(data.id)"
      >
        Rate This Film
      </v-btn>
    </v-card-actions>
  </v-card>

  <!-- UPDATE FORM  -->
  
  
  </v-container>
  <rating v-if="showupdate"></rating>
</div>
</template>

<script>
import rating from '../components/rating.vue'

const superagent = require('superagent')
export default {
  name: "Movies",
  components: {
    rating,
  },
  data() {
    return {
      datas: null,
      showMovies: true,
      showupdate: false,
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      // console.log(this.$store.state.url_base, 'masuk kahh?');
      superagent
        .get(`${this.$store.state.url_base}/movies`)
        .then(result => {
          console.log(result.body, 'apa ini??');
          this.datas = result.body
          // console.log(this.data[0].id, 'masuk kahhh??');
        })
    },
    showUpdate(id) {
      superagent
        .get(`${this.$store.state.url_base}/movies/${id}`)
        .then(result => {
          this.$store.commit('dataUpdate', result)
          this.$store.commit('showUpdate', false)
          this.showMovies = !this.showMovies;
          this.showupdate = !this.showupdate;
        })
        // .end((err) => {
        // })
    },

  }
};
</script>

<style scoped>
.cardmovies {
  display: flex;
  justify-content: flex-start;
}
</style>

<template>
  <div class="container col-6">
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="movieNya.poster" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="movieNya.title">
            <b-card-text>Category: {{movieNya.type}}</b-card-text>
            <b-card-text>Year Released: {{movieNya.year}}</b-card-text>

            <b-card-text>
              <a href="https://www.imdb.com/">IMDB</a>
            </b-card-text>
            <b-card-text>
              <div class="btn btn-outline-success" @click="goToDetail">See Detail</div>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "movie card",
  props: ["movieNya"],

  methods: {
    goToDetail() {
      let id = this.movieNya.id;
      this.$router.push(`/movie/${id}`);
    }
  }
};
</script>

<style>
</style>
<template>
<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="content.poster" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ content.title }}</h5>
        <p class="card-text">{{ content.year }}</p>
        <p class="card-text">{{ content.type }}</p>
        <p class="card-text"><small class="text-muted">{{ content.imdbID }}</small></p>
        <a href="" v-on:click.prevent="gotoMovieID(content.id)">update</a>
        <br>
        <a href="" v-on:click.prevent="gotoMovieRate(content.id)">rate</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'list-movie',
    props: ['content'],
    methods: {
        gotoMovieID(id) {
            this.$router.push(`/movies/${id}`)
        },
        gotoMovieRate(id) {
        }
    }
}
</script>

<style scoped>

</style>
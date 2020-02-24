<template>
  <div>
    <h1>Rate This Movie</h1>
    <form @submit.prevent="addRate">
      <label for="reviewer">Reviewer Name:</label>
      <br>
      <input type="text" id="reviewer" v-model="form.reviewer">
      <br>
      <label for="points">Points:</label>
      <br>
      <input type="number" id="points" v-model="form.points">
      <br>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddRate',
  data () {
    return {
      form: {
        reviewer: '',
        points: ''
      }
    }
  },
  methods: {
    addRate () {
      this.$store.dispatch('addRate', {
        reviewer: this.form.reviewer,
        point: this.form.points,
        movieId: this.$route.params.id
      })
      this.form.reviewer = ''
      this.form.points = ''
    }
  }
}
</script>

<style scoped>

</style>
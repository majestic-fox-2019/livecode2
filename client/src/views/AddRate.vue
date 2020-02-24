<template>
  <div>
    <h1>Rate This Movie</h1>
    <form @submit.prevent="addRate">
      <label class="inputLabel" for="reviewer">Reviewer Name:</label>
      <br>
      <input class="inputBox" type="text" id="reviewer" v-model="form.reviewer" placeholder="Enter Reviewer Name">
      <br>
      <label class="inputLabel" for="points">Points:</label>
      <br>
      <input class="inputBox" type="number" id="points" v-model="form.points" placeholder="Enter Points">
      <br>
      <button type="submit" class="submitButton">Submit</button>
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
.submitButton {
  border: none;
  background-color: #91ffff;
  border-radius: 10px;
  width: 7vw;
  height: 5vh;
  margin-top: 3%;
  cursor: pointer;
}
.submitButton:hover {
  background-color: #76caca;
}
.inputBox {
  border: none;
  background-color: #c1c1c1;
  border-radius: 10px;
  width: 20vw;
  height: 5vh;
  padding: 2%;
  font-size: 1.5em;
}
.inputLabel {
  font-size: 1em;
  font-weight: bold;
}
</style>
<template>
  <div>
    <template>
      <div>
        <b-form-input
          v-model="riviewer"
          placeholder="Input the riviewer name"
        ></b-form-input>
        <b-form-input
          type="number"
          v-model="rate"
          placeholder="Input the riviewer name"
        ></b-form-input>
      </div>
      <b-button @click="addRate">Add Rate</b-button>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddRate',
  props: ['movieId'],
  data() {
    return {
      riviewer: '',
      rate: ''
    }
  },
  methods: {
    addRate() {
      axios({
        method: 'post',
        url: `http://localhost:3000/rates/${this.movieId}`,
        data: {
          reviewer: this.riviewer,
          point: this.rate
        }
      })
        .then(({ data }) => {
          this.$emit('success')
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style></style>

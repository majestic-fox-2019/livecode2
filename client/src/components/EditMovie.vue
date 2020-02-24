<template>
  <div>
    <div>
      <b-form-input
        v-model="title"
        placeholder="Input the title"
      ></b-form-input>
      <b-form-input
        type="number"
        v-model="year"
        placeholder="Input the year"
      ></b-form-input>
      <b-form-input
        v-model="poster"
        placeholder="Input the image url"
      ></b-form-input>
    </div>
    <b-button @click="editMovie">edit</b-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'editMovie',
  props: ['allData'],
  methods: {
    editMovie() {
      axios({
        method: 'put',
        url: `http://localhost:3000/movies/${this.allData.id}`,
        data: {
          title: this.title,
          year: this.year,
          poster: this.poster
        }
      })
        .then(({ data }) => {
          this.$emit('sukses')
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  data() {
    return {
      title: '',
      year: '',
      poster: '',
      type: ''
    }
  },
  created() {
    this.title = this.allData.title
    this.year = this.allData.year
    this.poster = this.allData.poster
    console.log(' ini datanya', this.allData)
  }
}
</script>

<style></style>

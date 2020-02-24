<template>
<div v-if="showRating">

  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="rating"
      label="Rating"
      type='number'
      required
    ></v-text-field>
    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Cancel Update
    </v-btn>

    <v-btn
      color="warning"
      @click="rate"
    >
      Rate
    </v-btn>
  </v-form>
</div>
</template>

<script>
const superagent = require('superagent')

export default {
  name: 'rating',
  data() {
    return {
      showRating: true,
      // datas: null,
      name: null,
      rating: null,
    }
  },
  methods: {
    rate() {
      superagent
        .post(`${this.$store.state.url_base}/ratings`)
        .send({
          name: this.name,
          rating: this.rating,
          MovieId: this.$store.state.updateId
        })
        .end(() => {
          this.showRating = false;
          this.$store.commit('showUpdate', true)
        })
    }
  }
}
</script>

<style scoped>

</style>
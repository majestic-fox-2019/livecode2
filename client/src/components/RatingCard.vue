<template>
  <div class="rateCard">
      <div class="reviewer">
          {{rateData.reviewer}}
      </div>
      <div class="Point">
          {{rateData.point}}
      </div>
      <div>
          <button @click.prevent="deleteRate(rateData.id)">delete</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RatingCard',
  props: {
    rateData: {
        type: Object
    }
  },
  methods: {
      deleteRate (id) {
          this.$store.dispatch('deleteRate', {
            id: id,
            movieId: this.$route.params.id
          })
      }
  }
}
</script>

<style scoped>
.rateCard {
    height: 5vh;
    width: 60vh;
    display: flex;
    justify-content: space-around;
    margin-bottom: 1%;
    border: 1px solid black;
    align-items: center;
}
</style>

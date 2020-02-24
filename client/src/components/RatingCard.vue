<template>
  <div class="rateCard">
      <div class="reviewer">
          {{rateData.reviewer}}
      </div>
      <div class="Point">
          {{rateData.point}}
      </div>
      <div>
          <button>delete</button>
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

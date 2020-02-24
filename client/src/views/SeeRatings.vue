<template>
  <div>
    <h1>Ratings</h1>
    <div class="forRates">
        <div class="RateHeader">
            <div>
                <h3>Reviewer</h3>
            </div>
            <div>
                <h3>Points</h3>
            </div>
            <div></div>
        </div>
        <RatingCard v-for="(rate, i) in $store.state.movieDetails.Rates" :key="i" :rateData="rate"></RatingCard>
    </div>
  </div>
</template>

<script>
import RatingCard from '../components/RatingCard.vue'
export default {
  name: 'SeeRatings',
  components: {
    RatingCard
  }
}
</script>

<style scoped>
.RateHeader {
    height: 5vh;
    width: 60vh;
    display: flex;
    justify-content: space-around;
    margin-bottom: 1%;
    align-items: center;
}
.forRates {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

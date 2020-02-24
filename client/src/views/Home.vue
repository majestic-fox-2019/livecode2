<template>
  <div class="home">
    <h1>judul</h1>
    <div class="card-group">
      <card></card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import card from "../components/card.vue";
export default {
  name: "Home",
  components: {
    card
  }
};
</script>

<template>
  <div>
    <b-card bg-variant="dark" text-variant="white" :title="detailRate.reviewer">
      <b-card-text>
        <h1>Point: {{detailRate.point}}</h1>
      </b-card-text>
      <b-button variant="danger" @click="deleteRating">delete</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Rating",
  props: ["detailRate"],
  methods: {
    deleteRating() {
      let id = this.detailRate.id;
      //   console.log(id, "<<<");
      this.$store.dispatch("deleteRating", id).then(() => {
        this.$emit("abisDelete");
      });
    }
  }
};
</script>

<style>
</style>
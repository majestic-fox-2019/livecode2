<template>
  <div class="container" style="background-color : yellow">
    <div class="row">
      <div class="col">
        <h2>{{content.reviewer}}</h2>
      </div>
      <div class="col">
        <h2>{{content.point}}</h2>
      </div>
      <div class="col">
        <b-button @click.prevent="deleteRating(content.id)" variant="danger">Delete</b-button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  props: ["content"],
  methods: {
    deleteRating(id) {
      console.log(id);
      this.$store.dispatch("deleteRating", id);
    }
  }
};
</script>

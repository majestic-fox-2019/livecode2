<template>
  <div>
    <b-card
      :title="content.title"
      :img-src="content.poster"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>{{content.year}}</b-card-text>

      <b-button @click.prevent="detailCard(content.id)" href="#" variant="primary">Detail</b-button>
    </b-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  props: ["content"],
  methods: {
    detailCard(id) {
      console.log(id);
      this.$router.push({ path: `/${id}` });
    }
  }
};
</script>

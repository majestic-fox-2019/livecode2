<template>
  <b-card :img-src="data.poster" img-alt="Card image" img-left class="mb-3">
    <h1>{{ data.title }}</h1>
    <h4>{{ data.year }}</h4>
    <b-card-text>Type: {{ data.type }}</b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'ItemCard2',
  props: ['data']
}
</script>

<style></style>

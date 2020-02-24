<template>
  <div>
    <div v-for="(data, i) in allData.Rates" :key="i">
      <b-card
        :title="data.reviewer"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{ data.point }}
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllRate',
  props: ['allData']
}
</script>

<style></style>

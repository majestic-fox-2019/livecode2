<template>
  <v-toolbar>
    <v-toolbar-title>Ratings</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn text>
      <h4>Edit Movie Data</h4>
    </v-btn>
    <v-btn text>
      <h4>Show All Ratings</h4>
    </v-btn>

    <v-btn icon @click.prevent="addRating">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'ToolbarRating',
  methods: {
    addRating() {
      console.log('HEHEHE')
    }
  }
}
</script>

<style lang="scss" scoped></style>

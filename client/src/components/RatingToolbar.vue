<template>
  <v-toolbar>
    <v-toolbar-title>Ratings</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn text @click.prevent="editMovie">
      <h4>Edit Movie Data</h4>
    </v-btn>
    <v-btn text @click.prevent="showRatings">
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
      this.$store.commit('ADD_RATING', true)
    },
    editMovie() {
      const id = this.$route.params.id
      this.$router.push('/movie/' + id + '/edit')
      this.$store.commit('ADD_RATING', false)
    },
    showRatings() {
      const id = this.$route.params.id
      this.$router.push('/movie/' + id)
      this.$store.commit('ADD_RATING', false)
    }
  }
}
</script>

<style lang="scss" scoped></style>

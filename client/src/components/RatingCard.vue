<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{
          rating.reviewer
        }}</v-list-item-title>
        <v-list-item-subtitle>Rating : {{ rating.point }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn icon @click.prevent="deleteRating(rating.id)"
        ><v-icon>mdi-delete</v-icon></v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'RatingCards',
  props: ['rating'],
  methods: {
    deleteRating(id) {
      this.$store.dispatch('DELETE_RATING', id)
    }
  }
}
</script>

<style lang="scss" scoped></style>

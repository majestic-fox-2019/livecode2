<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="form.reviewer"
            label="Reviewer"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="form.point"
            label="Point"
            type="number"
            min="0"
            max="100"
            required
          ></v-text-field>
        </v-col>

        <v-btn color="warning" @click.prevent="submitRating">
          Submit Rating
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'RatingForm',
  data() {
    return {
      form: {
        reviewer: null,
        point: null
      }
    }
  },
  methods: {
    submitRating() {
      this.$store.dispatch('ADD_RATING', this.form)
    }
  }
}
</script>

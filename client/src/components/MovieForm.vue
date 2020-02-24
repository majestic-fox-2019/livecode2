<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.title"
            label="Title"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.year"
            label="Year"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="form.imdbID"
            label="IMDB ID"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-select v-model="form.type" label="Standard"></v-select>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field
            v-model="form.poster"
            label="Poster"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

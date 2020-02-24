<template>
  <v-app>
    <Navbar />
    <v-content>
      <Movies />
    </v-content>
  </v-app>
</template>

<script>
import Movies from "./views/Movies.vue";
import Navbar from "../src/components/navbar";

export default {
  name: "App",

  components: {
    Movies,
    Navbar
  },

  data: () => ({
    //
  })
};
</script>

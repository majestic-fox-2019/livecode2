<template>
  <v-app>
    <v-container>
      <Title />
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
import Title from '@/components/Title'

export default {
  name: 'App',
  components: {
    Title
  }
}
</script>

<template>
  <div class="home">
    <Title msg="Movie List"/>
    <Content />
  </div>
</template>

<script>
// @ is an alias to /src
import Content from '../components/Content'
import Title from '../components/Title'

export default {
  name: 'Home',
  components : {
    Content,
    Title
  }
}
</script>

<template>
  <div class="home">
    <img alt="logo" src="../assets/logo.jpg">
    <HelloWorld msg="Entrainement formulaire Vue.js"/>
  </div>
</template>

<script>
// @ est un alias pour /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
img {
  margin: 0 auto; /* permet de centrer l'image */
  display: block;
  margin-bottom: 20px;
}
</style>

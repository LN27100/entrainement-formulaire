<template>
  <div class="home">
    <img alt="logo" src="../assets/logo.jpg">
    <HelloWorld msg="Entrainement formulaire Vue.js"/>
    <NameProject />
  </div>
</template>

<script>
// @ est un alias pour /src
import HelloWorld from '@/components/HelloWorld.vue'
import NameProject from '@/components/NameProject.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NameProject
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

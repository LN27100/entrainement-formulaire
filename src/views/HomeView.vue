<template>
  <div class="home">
    <img alt="logo" src="../assets/logo.jpg">
    <HelloWorld msg="Entrainement formulaire"/>
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

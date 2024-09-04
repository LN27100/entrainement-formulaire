<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p class="paraAccueil">
      Dans la page Inscription, vous trouverez le formulaire à remplir.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}

.paraAccueil {
  text-align: center;
}
</style>

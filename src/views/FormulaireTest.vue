<template>
  <div class="FormIn">
    <h1>Formulaire d'inscription</h1>
    <mon-formulaire></mon-formulaire>
  </div>
</template>

<script>
import MonFormulaire from '@/components/MonFormulaire.vue'

export default {
  name: 'FormulaireTest',
  components: {
    MonFormulaire
  }
}
</script>

<style>
.FormIn {
  margin: auto;
  padding: 1em;
}
</style>

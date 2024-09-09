<template>
  <div class="FormIn">
    <h1>Formulaire d'inscription</h1>
     <!-- @submit.prevent empêche le rechargement de la page lors de la soumission du formulaire et appelle la méthode handleSubmit -->
  <form @submit.prevent="handleSubmit">
    <FormulaireName />
    <MonFormulaire />
  </form>
  </div>
</template>

<script>
import MonFormulaire from '@/components/MonFormulaire.vue'
import FormulaireName from '@/components/FormulaireName.vue'

export default {
  name: 'FormulaireTest',
  components: {
    MonFormulaire,
    FormulaireName
  }
}
</script>

<style>
.FormIn {
  margin: auto;
  padding: 0 0.8rem;
  }
</style>

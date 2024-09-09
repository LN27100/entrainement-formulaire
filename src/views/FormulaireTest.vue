<template>
  <div class="FormIn">
    <h1>Formulaire d'inscription</h1>
     <!-- @submit.prevent empêche le rechargement de la page lors de la soumission du formulaire et appelle la méthode handleSubmit -->
  <form @submit.prevent="handleSubmit">
    <FormulaireName />
    <FormulaireBirthJob />
    <FormulaireSituation />
    <FormulaireMailPhone />
    <FormulaireDate />
      <!-- Bouton pour soumettre le formulaire -->
    <div class="formButton">
        <button type="submit">S'inscrire</button>
      </div>
  </form>

  </div>
</template>

<script>
import FormulaireMailPhone from '@/components/FormulaireMailPhone.vue'
import FormulaireName from '@/components/FormulaireName.vue'
import FormulaireBirthJob from '@/components/FormulaireBirthJob.vue'
import FormulaireSituation from '@/components/FormulaireSituation.vue'
import FormulaireDate from '@/components/FormulaireDate.vue'

export default {
  name: 'FormulaireTest',
  components: {
    FormulaireMailPhone,
    FormulaireName,
    FormulaireBirthJob,
    FormulaireSituation,
    FormulaireDate
  }
}
</script>

<style>
.FormIn {
  margin: auto;
  padding: 0 0.8rem;
  }
</style>

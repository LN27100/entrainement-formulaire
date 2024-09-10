<template>
    <!-- Afficher le message de confirmation après soumission -->
      <p v-if="formSubmitted" class="confirmation-message">
        Votre inscription a bien été prise en compte !
      </p>

    <div class="FormIn">
      <h1>Formulaire d'inscription</h1>
      <!-- @submit.prevent empêche le rechargement de la page lors de la soumission du formulaire et appelle la méthode handleSubmit -->
      <form @submit.prevent="handleSubmit">
        <FormulaireName />
        <FormulaireBirthJob />
        <FormulaireMailPhone />

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

export default {
  name: 'FormulaireSimple',
  components: {
    FormulaireMailPhone,
    FormulaireName,
    FormulaireBirthJob
  },
  data () {
    return {
      formSubmitted: false // Variable pour suivre l'état de la soumission du formulaire
    }
  },
  methods: {
    handleSubmit () {
      // Logique de soumission du formulaire
      // Marque le formulaire comme soumis
      this.formSubmitted = true

      // Attendre 3 secondes avant la redirection
      setTimeout(() => {
        this.$router.push('/') // Redirige vers la page d'accueil
      }, 3000)
    }
  }
}
</script>

  <style>
  .FormIn {
    margin: auto;
    padding: 0 0.8rem;
  }

  .formButton {
    margin-top: 1rem;
  }

  .confirmation-message {
    margin-top: 1rem;
    margin-left: 2rem;
    color: green;
    font-weight: bold;
  }
  </style>

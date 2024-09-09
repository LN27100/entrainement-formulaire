<template>
  <!-- Conteneur principal pour le formulaire -->

    <div :class="mesClasses">

      <div class="form-groupOne">
        <AllLabel id="phone" label="Numéro de téléphone" v-model="phone" inputType="tel" required />
        <AllLabel id="email" label="Email" v-model="email" inputType="email" required />
      </div>

    </div>

</template>

<script>
import AllLabel from './AllLabel.vue'

export default {
  name: 'FormulaireMailPhone',
  components: {
    AllLabel // Déclaration du composant local
  }, // Nom du composant
  data () {
    // Fonction qui retourne un objet contenant les données de l'état du composant
    return {
      phone: '',
      email: '',
      arrival: '',
      departure: ''
    }
  },
  methods: {
    handleSubmit () {
      // Fonction appelée lors de la soumission du formulaire
      // Affiche des données du formulaire dans la console
      console.log('Email:', this.email)

      // Réinitialisation des champs du formulaire
      this.phone = ''
      this.email = ''
      this.arrival = ''
      this.departure = ''
    }
  },
  props: {
    // Définition des propriétés (props) que ce composant accepte
    mesClasses: { type: String, default: 'class1' }
  }
}
</script>

<style scoped>

#job {
  width: 8rem;
}

</style>

<!-- LEXIQUE -->
<!-- Le v-model simplifie la gestion de l'état du formulaire en liant directement les entrées de l'utilisateur aux données du composant, permettant ainsi des mises à jour dynamiques et réactives. -->
<!-- La v-model est utilisé dans les champs input, textarea et select. -->
<!-- Le @submit.prevent empêche le rechargement de la page lors de la soumission du formulaire. Cela permet de gérer le traitement du formulaire dans la méthode handleSubmit() du composant. -->

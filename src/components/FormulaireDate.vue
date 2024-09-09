<template>
    <!-- Conteneur principal pour le formulaire -->

      <div :class="mesClasses">

        <div class="form-groupOne">
          <AllLabel id="arrival" label="Date d'arrivée" v-model="arrival" inputType="date" required />
          <AllLabel id="departure" label="Date de départ" v-model="departure" inputType="date" required />
        </div>

      </div>

  </template>

<script>
import AllLabel from './AllLabel.vue'

export default {
  name: 'FormulaireDate',
  components: {
    AllLabel // Déclaration du composant local
  }, // Nom du composant
  data () {
    // Fonction qui retourne un objet contenant les données de l'état du composant
    return {
      arrival: '',
      departure: ''
    }
  },
  methods: {
    handleSubmit () {
      // Fonction appelée lors de la soumission du formulaire

      // Réinitialisation des champs du formulaire
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

  </style>

<template>
    <!-- Conteneur principal pour le formulaire -->

    <div :class="mesClasses">

        <div class="form-groupOne">
          <div class="form-groupOne">
            <!-- v-model lie la sélection à la donnée civility -->
            <select class="two" id="civility" v-model="civility" required>
              <option value="M">Monsieur</option>
              <option value="Mme">Madame</option>
            </select>
          </div>

            <!-- Composant qui encapsule le champ de formulaire avec son label et intègre ttes les props -->
            <AllLabel id="name" label="Nom" v-model="name" :required="true" />
            <AllLabel id="nameBirth" label="Nom de naissance" v-model="nameBirth" :required="true" />
            <AllLabel id="firstName" label="Prénom" v-model="firstName" :required="true" />
        </div>
        </div>
</template>

<script>
import AllLabel from './AllLabel.vue'

export default {
  name: 'FormulaireName',
  components: {
    AllLabel // Déclaration du composant local
  }, // Nom du composant
  data () {
    // Fonction qui retourne un objet contenant les données de l'état du composant
    return {
      civility: '',
      name: '',
      nameBirth: '',
      firstName: ''
    }
  },
  methods: {
    handleSubmit () {
      // Fonction appelée lors de la soumission du formulaire
      // Affiche des données du formulaire dans la console
      console.log('Nom:', this.name)

      // Réinitialisation des champs du formulaire
      this.civility = ''
      this.name = ''
      this.nameBirth = ''
      this.firstName = ''
    }
  },
  props: {
    // Définition des propriétés (props) que ce composant accepte
    mesClasses: { type: String, default: 'class1' }
  }
}
</script>

<template>
    <!-- Conteneur principal pour le formulaire -->

    <div :class="mesClasses">
        <div class="form-groupOne">
          <div class="form-groupOne">
            <label for="situation">Situation familiale</label>
            <select id="situation" v-model="situation" required>
              <option value="célibataire">Célibataire</option>
              <option value="concubinage">Concubinage</option>
              <option value="pacs">Pacsé(e)</option>
              <option value="marié">Marié(e)</option>
              <option value="Divorcé">Divorcé(e)</option>
              <option value="Veuf">Veuf(e)</option>
            </select>
          </div>

          <AllLabel id="children" label="Nombre d'enfants" v-model="children" inputType="number" required />
          <p>(à charge, mineurs)</p>
        </div>

        <div class="form-groupOne">
          <AllLabel id="city" label="Secteur" v-model="city" inputType="text" required />
          <div class="form-groupOne">
            <!-- @change est un écouteur d'événements qui déclenche la méthode uncheckOthers chaque fois que la case est cochée ou décochée -->
            <input type="checkbox" id="suspendu" v-model="suspendu" @change="uncheckOthers('suspendu')">
            <label for="suspendu">Suspendu</label>
            <input type="checkbox" id="a-suspendre" v-model="aSuspendre" @change="uncheckOthers('aSuspendre')">
            <label for="a-suspendre">A suspendre</label>
            <input type="checkbox" id="mensualisé" v-model="mensualise" @change="uncheckOthers('mensualise')">
            <label for="mensualisé">Mensualisé</label>
          </div>
        </div>
    </div>
    </template>

<script>
import AllLabel from './AllLabel.vue'

export default {
  name: 'MonFormulaire',
  components: {
    AllLabel // Déclaration du composant local
  }, // Nom du composant
  data () {
    // Fonction qui retourne un objet contenant les données de l'état du composant
    return {
      situation: '',
      children: '',
      city: '',
      suspendu: false,
      aSuspendre: false,
      mensualise: false
    }
  },
  methods: {
    handleSubmit () {
      // Fonction appelée lors de la soumission du formulaire

      // Réinitialisation des champs du formulaire
      this.situation = ''
      this.children = ''
      this.city = ''
      this.suspendu = false
      this.aSuspendre = false
      this.mensualise = false
    },
    // Méthode qui gère le comportement exclusif des cases à cocher
    uncheckOthers (checkedCheckbox) {
      // Si la case cochée est ...
      if (checkedCheckbox === 'suspendu') {
        this.aSuspendre = false // Décoche la case 'À suspendre'
        this.mensualise = false // Décoche la case 'Mensualité'
      } else if (checkedCheckbox === 'aSuspendre') {
        this.suspendu = false // Décoche la case 'Suspendu'
        this.mensualise = false // Décoche la case 'Mensualité'
      } else if (checkedCheckbox === 'mensualise') {
        this.suspendu = false // Décoche la case 'Suspendu'
        this.aSuspendre = false // Décoche la case 'À suspendre'
      }
    }
  },
  props: {
    // Définition des propriétés (props) que ce composant accepte
    mesClasses: { type: String, default: 'class1' }
  }
}
</script>

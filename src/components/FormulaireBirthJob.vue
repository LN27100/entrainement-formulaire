<template>
    <!-- Conteneur principal pour le formulaire -->

      <div class="class1 class2" >

        <div class="form-groupOne">
          <AllLabel id="birthdate" label="Date de naissance" v-model="birthdate" inputType="date" required />
            <AllLabel id="depNumber" label="Lieu de naissance (dpt et ville)" v-model="depNumber" inputType="number"
              required />
            <AllLabel id="cityBirth" label="Ville de naissance" v-model="cityBirth" inputType="text" required />

          <div class="form-groupOne">
            <label for="job">Profession</label>
            <select id="job" v-model="job" required>
              <option value="Fonctionnaire">Fonctionnaire</option>
              <option value="Policier">Policier</option>
              <option value="Pompier">Pompier</option>
              <option value="Travailleur social">Travailleur social</option>
              <option value="Cadre">Cadre</option>
              <option value="Employé">Employé</option>
              <option value="Technicien">Technicien</option>
              <option value="Ouvrier">Ouvrier</option>
              <option value="Entrepreneur">Entrepreneur</option>
              <option value="Freelance">Freelance</option>
              <option value="Artisan">Artisan</option>
              <option value="Médecin">Médecin</option>
              <option value="Infirmier">Infirmier</option>
              <option value="Pharmacien">Pharmacien</option>
              <option value="Thérapeuthe">Thérapeuthe</option>
              <option value="Enseignant">Enseignant</option>
              <option value="Educateur">Educateur</option>
              <option value="Développeur">Développeur</option>
              <option value="Ingénieur en informatique">Ingénieur en informatique</option>
              <option value="Analyste">Analyste</option>
              <option value="Technicien informatique">Technicien informatique</option>
              <option value="Assistant administratif">Assistant administratif</option>
              <option value="Technicien de maintenance">Technicien de maintenance</option>
              <option value="Journaliste">Journaliste</option>
              <option value="Vendeur">Vendeur</option>
              <option value="Artiste">Artiste</option>
              <option value="Serveur">Serveur</option>
              <option value="Coiffeur">Coiffeur</option>
              <option value="Etudiant">Etudiant</option>
              <option value="Retraité">Retraité</option>
              <option value="Sans profession">Sans profession</option>
              <option value="Chômeur">Chômeur</option>
            </select>
          </div>
        </div>
      </div>

    </template>

<script>
import AllLabel from './AllLabel.vue'

export default {
  name: 'FormulaireBirthJob',
  components: {
    AllLabel // Déclaration du composant local
  }, // Nom du composant
  data () {
    // Fonction qui retourne un objet contenant les données de l'état du composant
    return {
      birthdate: '',
      depNumber: null,
      cityBirth: '',
      job: ''
    }
  },
  methods: {
    handleSubmit () {
      // Fonction appelée lors de la soumission du formulaire

      // Réinitialisation des champs du formulaire
      this.birthdate = ''
      this.cityBirth = ''
      this.city = ''
      this.job = ''
      this.depNumber = ''
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

.class2 {
  margin-bottom: 1rem;
}

</style>

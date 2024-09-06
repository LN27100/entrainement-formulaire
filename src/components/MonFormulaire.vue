<template>
  <!-- Conteneur principal pour le formulaire -->
  <!-- @submit.prevent empêche le rechargement de la page lors de la soumission du formulaire et appelle la méthode handleSubmit -->
  <form @submit.prevent="handleSubmit">
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

      <div class="form-groupOne">
        <AllLabel id="phone" label="Numéro de téléphone" v-model="phone" inputType="tel" required />
        <AllLabel id="email" label="Email" v-model="email" inputType="email" required />
      </div>

      <div class="form-groupOne">
        <AllLabel id="arrival" label="Date d'arrivée" v-model="arrival" inputType="date" required />
        <AllLabel id="departure" label="Date de départ" v-model="departure" inputType="date" required />
      </div>

    </div>
 <!-- Bouton pour soumettre le formulaire -->
 <div class="formButton">
        <button type="submit">S'inscrire</button>
      </div>
  </form>
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
      civility: '',
      name: '',
      firstName: '',
      situation: '',
      birthdate: '',
      depNumber: null,
      cityBirth: '',
      city: '',
      suspendu: false,
      aSuspendre: false,
      mensualise: false,
      phone: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    handleSubmit () {
      // Fonction appelée lors de la soumission du formulaire
      // Affiche des données du formulaire dans la console
      console.log('Nom:', this.name)
      console.log('Email:', this.email)

      // Réinitialisation des champs du formulaire
      this.civility = ''
      this.name = ''
      this.firstName = ''
      this.situation = ''
      this.birthdate = ''
      this.cityBirth = ''
      this.city = ''
      this.suspendu = false
      this.aSuspendre = false
      this.mensualise = false
      this.phone = ''
      this.email = ''
      this.password = ''
      this.confirmPassword = ''
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

<style scoped>

#job {
  width: 8rem;
}

</style>

<!-- LEXIQUE -->
<!-- Le v-model simplifie la gestion de l'état du formulaire en liant directement les entrées de l'utilisateur aux données du composant, permettant ainsi des mises à jour dynamiques et réactives. -->
<!-- La v-model est utilisé dans les champs input, textarea et select. -->
<!-- Le @submit.prevent empêche le rechargement de la page lors de la soumission du formulaire. Cela permet de gérer le traitement du formulaire dans la méthode handleSubmit() du composant. -->

<template>
  <!-- Conteneur principal pour le formulaire -->
    <!-- @submit.prevent empêche le rechargement de la page lors de la soumission du formulaire et appelle la méthode handleSubmit -->
    <form @submit.prevent="handleSubmit">
      <div :class="mesClasses">

      <div class="groupOne">
      <div class="form-groupOne">
        <label for="civility">Civilité</label>
        <!-- v-model lie la sélection à la donnée civility -->
        <select id="civility" v-model="civility" required>
          <option value="M">Monsieur</option>
          <option value="Mme">Madame</option>
        </select>
      </div>

      <div class="form-groupOne">
        <label for="name">Nom</label>
        <input class="one" type="text" id="name" v-model="name" required />
      </div>

      <div class="form-groupOne">
        <label for="nameBirth">Nom de naissance</label>
        <input class="one" type="text" id="nameBirth" v-model="nameBirth" required />
      </div>

      <div class="form-groupOne">
        <label for="firtName">Prénom</label>
        <input class="one" type="text" id="firstName" v-model="firstName" required />
      </div>

    </div>

    <div class="groupOne">
      <div class="form-groupOne">
        <label for="birthdate">Date de naissance</label>
        <input type="date" id="birthdate" v-model="birthdate" required />
      </div>

      <div class="form-groupOne">
        <label for="depNumber">Lieu de naissance (dpt et ville)</label>
        <input type="number" id="depNumber" v-model="depNumber" required min="1" max="100" step="1" @input="validateNumber" />
        <input type="text" class="one" id="cityBirth" v-model="cityBirth" required />
      </div>

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
      <div class="form-group">
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

      <div class="form-group">
        <label for="city">Secteur</label>
        <input type="text" id="city" v-model="city" required />
      </div>

      <div class="checkbox-group">
        <input type="checkbox" id="suspendu" v-model="suspendu" @change="uncheckOthers('suspendu')"> <!-- écouteur d'événements qui déclenche la méthode uncheckOthers chaque fois que la case est cochée ou décochée -->
        <label for="suspendu">Suspendu</label>

        <input type="checkbox" id="a-suspendre" v-model="aSuspendre" @change="uncheckOthers('aSuspendre')">
        <label for="a-suspendre">A suspendre</label>

        <input type="checkbox" id="mensualite" v-model="mensualise" @change="uncheckOthers('mensualise')">
        <label for="mensualisé">Mensualisé</label>
    </div>

      <div class="form-group">
        <label for="phone">Numéro de téléphone</label>
        <input type="tel" id="phone" v-model="phone" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirmer le mot de passe</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
      </div>

      <!-- Bouton pour soumettre le formulaire -->
      <div class="formButton">
      <button type="submit">S'inscrire</button>
      </div>
    </div>

    </form>
</template>

<script>
export default {
  name: 'MonFormulaire', // Nom du composant
  data () {
    // Fonction qui retourne un objet contenant les données de l'état du composant
    return {
      civility: '',
      name: '',
      firstName: '',
      situation: '',
      birthdate: '',
      depNumber: null, // Stocke la valeur du champ 'depNumber'
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
    // Objet qui contient les méthodes du composant
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
  // Valide que la valeur entrée est bien comprise entre 1 et 100
  validateNumber () {
    if (this.depNumber < 1) {
      this.depNumber = 1 // Fixe la valeur minimale à 1 si l'utilisateur entre un chiffre en dessous
    } else if (this.depNumber > 100) {
      this.depNumber = 100 // Fixe la valeur maximale à 100 si l'utilisateur entre un chiffre au-dessus
    }
  },
  props: {
    // Définition des propriétés (props) que ce composant accepte
    mesClasses: { type: String, default: 'class1' }
  }
}
</script>

<style scoped>
.form-groupOne {
  display: flex;
  margin-bottom: 1rem;
  margin-right: 1rem;
  align-items: center;

}

.one {
  width: 10rem;
}

#civility {
  width: 5rem;
  height: 1rem;
}

.groupOne {
  display: flex;
}

#depNumber {
  width: 3.5rem;
  margin-right: 0.2rem;
}

.checkbox-group {
  justify-content: center;
  display: flex;
    margin-bottom: 1rem;
    flex-wrap: nowrap; /* Assure que les éléments ne se déplacent pas sur une nouvelle ligne */
}

.checkbox-group label {
    white-space: nowrap; /* Empêche le texte des labels de se briser sur plusieurs lignes */
}

input[type=checkbox], input[type=radio] {
    width: min-content;
    margin-right: 0.5rem;
}

#birthdate {
  color: #2c3e50;
  font-size: 0.8rem;
  width: 7rem;
  }
</style>

<!-- LEXIQUE -->
<!-- Le v-model simplifie la gestion de l'état du formulaire en liant directement les entrées de l'utilisateur aux données du composant, permettant ainsi des mises à jour dynamiques et réactives. -->
<!-- La v-model est utilisé dans les champs input, textarea et select. -->
<!-- Le @submit.prevent empêche le rechargement de la page lors de la soumission du formulaire. Cela permet de gérer le traitement du formulaire dans la méthode handleSubmit() du composant. -->

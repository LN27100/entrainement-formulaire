<template>
  <!-- Conteneur principal pour le formulaire -->
  <div :class="mesClasses">
    <!-- @submit.prevent empêche le rechargement de la page lors de la soumission du formulaire et appelle la méthode handleSubmit -->
    <form @submit.prevent="handleSubmit">

      <div class="form-group">
        <label for="civility">Civilité</label>
        <!-- v-model lie la sélection à la donnée civility -->
        <select id="civility" v-model="civility" required>
          <!-- Option par défaut, désactivée, invitant l'utilisateur à choisir une option -->
          <option disabled value="">Choisissez une civilité</option>
          <option value="M">Monsieur</option>
          <option value="Mme">Madame</option>
        </select>
      </div>

      <div class="form-group">
        <label for="name">Nom</label>
        <!-- v-model lie l'entrée à la donnée name -->
        <input type="text" id="name" v-model="name" required />
      </div>

      <div class="form-group">
        <label for="firtName">Prénom</label>
        <!-- v-model lie l'entrée à la donnée firstName -->
        <input type="text" id="firstName" v-model="firstName" required />
      </div>

      <div class="form-group">
        <label for="situation">Situation familiale</label>
        <!-- v-model lie la sélection à la donnée situation -->
        <select id="situation" v-model="situation" required>
          <!-- Option par défaut, désactivée, invitant l'utilisateur à choisir une option -->
          <option disabled value="">Choisissez une situation</option>
          <option value="célibataire">Célibataire</option>
          <option value="concubinage">Concubinage</option>
          <option value="pacs">Pacsé</option>
          <option value="marié">Marié</option>
          <option value="Divorcé">Divorcé</option>
          <option value="Veuf">Veuf</option>
        </select>
      </div>

      <div class="form-group">
        <label for="birthdate">Date de naissance</label>
        <!-- v-model lie l'entrée à la donnée birthdate -->
        <input type="date" id="birthdate" v-model="birthdate" required />
      </div>

      <div class="form-group">
        <label for="streetNumber">Numéro de rue</label>
        <!-- v-model lie l'entrée à la donnée streetNumber -->
        <input type="text" id="streetNumber" v-model="streetNumber" required />
      </div>

      <div class="form-group">
        <label for="streetName">Nom de rue</label>
        <!-- v-model lie l'entrée à la donnée streetName -->
        <input type="text" id="streetName" v-model="streetName" required />
      </div>

      <div class="form-group">
        <label for="postalCode">Code postal</label>
        <!-- v-model lie l'entrée à la donnée postalCode -->
        <input type="text" id="postalCode" v-model="postalCode" required />
      </div>

      <div class="form-group">
        <label for="city">Ville</label>
        <!-- v-model lie l'entrée à la donnée city -->
        <input type="text" id="city" v-model="city" required />
      </div>

      <div class="form-group">
        <label for="phoneMobile">Numéro de téléphone portable</label>
        <!-- v-model lie l'entrée à la donnée phoneMobile -->
        <input type="tel" id="phoneMobile" v-model="phoneMobile" required />
      </div>

      <div class="form-group">
        <label for="phoneFixed">Numéro de téléphone fixe</label>
        <!-- v-model lie l'entrée à la donnée phoneFixed -->
        <input type="tel" id="phoneFixed" v-model="phoneFixed" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <!-- v-model lie l'entrée à la donnée email -->
        <input type="email" id="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="password">Mot de passe</label>
        <!-- v-model lie l'entrée à la donnée password -->
        <input type="password" id="password" v-model="password" required />
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirmer le mot de passe</label>
        <!-- v-model lie l'entrée à la donnée confirmPassword -->
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
      </div>

      <!-- Bouton pour soumettre le formulaire -->
      <button type="submit">S'inscrire</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MonFormulaire', // Nom du composant
  data () {
    // Fonction qui retourne un objet contenant les données de l'état du composant
    return {
      name: '', // Champ de saisie pour le nom
      email: '', // Champ de saisie pour l'email
      password: '' // Champ de saisie pour le mot de passe
    }
  },
  methods: {
    // Objet qui contient les méthodes du composant
    handleSubmit () {
      // Fonction appelée lors de la soumission du formulaire

      // Affiche le nom dans la console
      console.log('Nom:', this.name)
      // Affiche l'email dans la console
      console.log('Email:', this.email)
      // Affiche le mot de passe dans la console
      console.log('Mot de passe:', this.password)

      // Réinitialise le champ de saisie du nom
      this.name = ''
      // Réinitialise le champ de saisie de l'email
      this.email = ''
      // Réinitialise le champ de saisie du mot de passe
      this.password = ''
    }
  },
  props: {
    mesClasses: { type: String, default: 'class1' }
  }
}
</script>

<style scoped>

.form-group {
  margin-bottom: 1em;
}

label {
  margin-bottom: 0.5em;
  color: #333333;
  display: block;
}

input {
  border: 1px solid #cccccc;
  padding: 0.5em;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
}

button {
  padding: 0.7em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}

button:hover {
  background-color: #0056b3;
}
</style>

<!-- LEXIQUE -->
<!-- Le v-model simplifie la gestion de l'état du formulaire en liant directement les entrées de l'utilisateur aux données du composant, permettant ainsi des mises à jour dynamiques et réactives. -->
<!-- La v-model est utilisé dans les champs input, textarea et select. -->
<!-- Le @submit.prevent empêche le rechargement de la page lors de la soumission du formulaire. Cela permet de gérer le traitement du formulaire dans la méthode handleSubmit() du composant. -->

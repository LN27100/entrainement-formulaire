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
        <label for="cityBirth">lieu de naissance</label>
        <!-- v-model lie l'entrée à la donnée city -->
        <input type="text" id="cityBirth" v-model="cityBirth" required />
      </div>

      <div class="form-group">
        <label for="city">Secteur</label>
        <!-- v-model lie l'entrée à la donnée city -->
        <input type="text" id="city" v-model="city" required />
      </div>

      <div class="form-groupCheck">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Suspendu
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
        <label class="form-check-label" for="flexCheckChecked">
          A susprendre
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
        <label class="form-check-label" for="flexCheckChecked">
          Mensualisé
        </label>
      </div>
    </div>

      <div class="form-group">
        <label for="phone">Numéro de téléphone</label>
        <!-- v-model lie l'entrée à la donnée phoneMobile -->
        <input type="tel" id="phone" v-model="phone" required />
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
      civility: '',
      name: '',
      firstName: '',
      situation: '',
      birthdate: '',
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

      // Affiche toutes les données du formulaire dans la console
      console.log('Civilité:', this.civility)
      console.log('Nom:', this.name)
      console.log('Prénom:', this.firstName)
      console.log('Situation familiale:', this.situation)
      console.log('Date de naissance:', this.birthdate)
      console.log('Lieu de naissance:', this.cityBirth)
      console.log('Secteur:', this.city)
      console.log('Suspendu:', this.suspendu)
      console.log('À suspendre:', this.aSuspendre)
      console.log('Mensualisé:', this.mensualise)
      console.log('Numéro de téléphone:', this.phone)
      console.log('Email:', this.email)
      console.log('Mot de passe:', this.password)
      console.log('Confirmer le mot de passe:', this.confirmPassword)

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

.form-groupCheck {
  margin-bottom: 1em;
}

</style>

<!-- LEXIQUE -->
<!-- Le v-model simplifie la gestion de l'état du formulaire en liant directement les entrées de l'utilisateur aux données du composant, permettant ainsi des mises à jour dynamiques et réactives. -->
<!-- La v-model est utilisé dans les champs input, textarea et select. -->
<!-- Le @submit.prevent empêche le rechargement de la page lors de la soumission du formulaire. Cela permet de gérer le traitement du formulaire dans la méthode handleSubmit() du composant. -->

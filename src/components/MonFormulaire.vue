<template>
    <div class="form-container">
      <form @submit.prevent="handleSubmit">

        <div class="form-group">
        <label for="civility">Civilité</label>
        <select id="civility" v-model="civility" required>
          <option disabled value="">Choisissez une civilité</option>
          <option value="M">Monsieur</option>
          <option value="Mme">Madame</option>
        </select>
      </div>

        <div class="form-group">
          <label for="name">Nom</label>
          <input type="text" id="name" v-model="name" required />
        </div>

        <div class="form-group">
          <label for="firtName">Prénom</label>
          <input type="text" id="firstName" v-model="name" required />
        </div>

        <div class="form-group">
            <label for="situation">Situation familiale</label>
            <select id="civility" v-model="civility" required>
          <option disabled value="">Choisissez une civilité</option>
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
        <input type="date" id="birthdate" v-model="birthdate" required />
      </div>

      <div class="form-group">
        <label for="streetNumber">Numéro de rue</label>
        <input type="text" id="streetNumber" v-model="streetNumber" required />
      </div>

      <div class="form-group">
        <label for="streetName">Nom de rue</label>
        <input type="text" id="streetName" v-model="streetName" required />
      </div>

      <div class="form-group">
        <label for="postalCode">Code postal</label>
        <input type="text" id="postalCode" v-model="postalCode" required />
      </div>

      <div class="form-group">
        <label for="city">Ville</label>
        <input type="text" id="city" v-model="city" required />
      </div>

      <div class="form-group">
        <label for="phoneMobile">Numéro de téléphone portable</label>
        <input type="tel" id="phoneMobile" v-model="phoneMobile" required />
      </div>

      <div class="form-group">
        <label for="phoneFixed">Numéro de téléphone fixe</label>
        <input type="tel" id="phoneFixed" v-model="phoneFixed" required />
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
          <label for="confirmPassword">Cormirmer le mot de passe</label>
          <input type="password" id="confirmPassword" v-model="password" required />
        </div>

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  </template>

<script>
export default {
  name: 'MonFormulaire',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {
      console.log('Nom:', this.name)
      console.log('Email:', this.email)
      console.log('Mot de passe:', this.password)
      this.name = ''
      this.email = ''
      this.password = ''
    }
  }
}
</script>

  <style scoped>
  .form-container {
    max-width: 400px;
    margin: auto;
    padding: 1em;
    background-color: #f9f9f9;
    border-radius: 5px;
  }

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

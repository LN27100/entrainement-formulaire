<template>
    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Nom</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input type="password" id="password" v-model="password" required />
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

<template>
    <div class="hello">
      <h4>Notice :</h4>
      <p>
Dans cette notice vous trouverez toutes les informations nécessaire à l'utilisation du formulaire.</p>
      <ul>
        <li>Pourquoi un formulaire?</li>
        <p>Le formulaire est important dans tous domaines administratifs et utiles dan de nombreux cas donc il est important d'en maitriser la conception et l'utilisation.</p>
        <li>Caractéristiques du formulaire:</li>
<p>Le formulaire doit contenir les champs classiques tel que le nom, prénom, ainsi que la profession, le nombre d'enfants et la situation d'imposition par ccase à cocher.</p>
      </ul>

    </div>
  </template>

<script>
export default {
  name: 'NoticeOne'
}
</script>

  <style scoped lang="scss">
  h4 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>

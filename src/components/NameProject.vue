<template>
    <div>
        <p> {{ fullName }}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      firstName: 'Hélène',
      lastName: 'Poirier-Halley'
    }
  },
  computed: {
    fullName () {
      return `${this.firstName} ${this.lastName}`
    }
  }
}
</script>

<style scoped>
p {
  margin-left: 1rem;
}
</style>

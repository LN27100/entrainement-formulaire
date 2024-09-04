<template>
    <div class="form-groupOne">
        <label :for="id">{{ label }}</label>
        <!-- Utilisez v-model sur une donnée locale -->
        <input type="text" :id="id" v-model="localValue" :required="required" />
    </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    value: String,
    required: Boolean
  },
  data () {
    return {
      // Créez une donnée locale pour la valeur
      localValue: this.value
    }
  },
  watch: {
    // Synchronisez la donnée locale avec la prop `value`
    value (newValue) {
      this.localValue = newValue
    },
    // Émettez un événement lorsque la donnée locale change
    localValue (newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

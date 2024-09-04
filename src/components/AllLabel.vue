<template>
  <div class="form-groupOne">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="inputType"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
      :class="{'input-number': inputType === 'number'}"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style scoped>
.input-number {
  width: 3.5rem;
}
</style>

<!--
Définit le type d'input: :type="inputType"
Liaison de la valeur de l'input avec le modèle de donnée: :value="modelValue"
Émission de l'événement 'update:modelValue' lors de la saisie: @input="$emit('update:modelValue', $event.target.value)"
Rend le champ obligatoire si nécessaire: :required="required"
Applique des classes dynamiques pour la validation et le style: :class="{'input-number': inputType === 'number', 'is-invalid': v$.modelValue.$invalid && v$.modelValue.$touch}"
-->

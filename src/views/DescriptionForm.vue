<template>
    <div class="FormIn">
      <h1>Présentation</h1>

        <PresentationGlobale />
        <DescriptionOne />

    </div>
  </template>

<script>
import DescriptionOne from '@/components/DescriptionOne.vue'
import PresentationGlobale from '@/components/PresentationGlobale.vue'

export default {
  name: 'NoticeForm',
  components: {
    PresentationGlobale,
    DescriptionOne
  }
}
</script>

<style>

</style>

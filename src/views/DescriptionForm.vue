<template>
    <div class="FormIn">
      <h1>Présentation</h1>
        <PresentationGlobale />
        <NameProject />
    </div>
  </template>

<script>
import NameProject from '@/components/NameProject.vue'
import PresentationGlobale from '@/components/PresentationGlobale.vue'

export default {
  name: 'NoticeForm',
  components: {
    PresentationGlobale,
    NameProject
  }
}
</script>

<template>
    <div class="FormIn">
      <h1>Présentation</h1>
        <PresentationGlobale />
        <DescriptionOne />
        <NameProject />
    </div>
  </template>

<script>
import DescriptionOne from '@/components/DescriptionOne.vue'
import NameProject from '@/components/NameProject.vue'
import PresentationGlobale from '@/components/PresentationGlobale.vue'

export default {
  name: 'NoticeForm',
  components: {
    PresentationGlobale,
    DescriptionOne,
    NameProject
  }
}
</script>

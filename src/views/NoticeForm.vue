<template>
    <div class="FormIn">
      <h1>Présentation</h1>

        <PresentationGlobale />
        <NoticeOne />

    </div>
  </template>

<script>
import NoticeOne from '@/components/NoticeOne.vue'
import PresentationGlobale from '@/components/PresentationGlobale.vue'

export default {
  name: 'NoticeForm',
  components: {
    PresentationGlobale,
    NoticeOne
  }
}
</script>

<style>

</style>

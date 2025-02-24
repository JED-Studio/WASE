<script>
import AppAboutUs from '@/components/AppAboutUsView/AppAboutUs.vue'
import AppPrinciples from '@/components/AppPrinciples.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    AppAboutUs,
    AppPrinciples,
  },
  setup() {},
})
</script>

<template>
  <AppAboutUs />
  <AppPrinciples />
</template>

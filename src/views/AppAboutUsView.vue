<script>
import AppAboutUs from '@/components/AppAboutUsView/AppAboutUs.vue'
import AppPrinciples from '@/components/AppPrinciples.vue'
import AppСhapter from '@/components/chapter/AppСhapter.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    AppСhapter,
    AppAboutUs,
    AppPrinciples,
  },

  setup() {},
})
</script>

<template>
  <AppСhapter title="О нас" />
  <AppAboutUs />
  <AppPrinciples />
</template>

<style></style>

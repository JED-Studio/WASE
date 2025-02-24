<script>
import { defineComponent } from 'vue'
import AppBasicInfo from '../components/AppBasicInfo.vue'
import AppWork from '../components/AppWork.vue'
import AppAchievements from '../components/AppAchievements.vue'
import AppServices from '../components/AppServices.vue'
import AppPrinciples from '@/components/AppPrinciples.vue'

export default defineComponent({
  components: {
    AppAchievements,
    AppBasicInfo,
    AppWork,
    AppServices,

    AppPrinciples,
  },
  setup() {},
})
</script>

<template>
  <AppBasicInfo />

  <AppAchievements />
  <AppWork />
  <AppServices />
  <AppPrinciples />
</template>

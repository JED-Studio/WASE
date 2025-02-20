<script>
import { defineComponent } from 'vue'
import AppBasicInfo from '../components/AppBasicInfo.vue'
import AppWork from '../components/AppWork.vue'
import AppAchievements from '../components/AppAchievements.vue'
import AppServices from '../components/AppServices.vue'
import AppScroll from '../components/AppScroll.vue'
import AppScrollt from '../components/AppScrollt.vue'
import AppPrinciples from '@/components/AppPrinciples.vue'

export default defineComponent({
  components: {
    AppAchievements,
    AppBasicInfo,
    AppWork,
    AppServices,
    AppScroll,
    AppScrollt,
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
  <AppScroll />
  <AppScrollt />
  <AppPrinciples />
</template>

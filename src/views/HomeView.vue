<script>
import { defineComponent, provide, ref } from 'vue'
import AppBasicInfo from '../components/AppBasicInfo.vue'
import AppWork from '../components/works/AppWork.vue'
import AppAchievements from '../components/AppAchievements.vue'
import AppServices from '../components/AppServices.vue'
import AppPrinciples from '@/components/AppPrinciples.vue'
import AppHeadlines from '@/components/chapter/AppHeadlines.vue'
import AppCompany from '@/components/slidelogo/AppCompany.vue'
import AppModal from '@/components/modal/AppModal.vue'

export default defineComponent({
  components: {
    AppAchievements,
    AppPrinciples,
    AppBasicInfo,
    AppHeadlines,
    AppServices,
    AppCompany,
    AppWork,
    AppModal,
  },
  setup() {
    const openModal = ref(false)

    const open = () => {
      openModal.value = true
    }

    const close = () => {
      openModal.value = false
    }

    provide('openModal', open)

    return {
      openModal,
      open,
      close,
    }
  },
})
</script>

<template>
  <AppModal :openModal="openModal" @closeModal="close" />
  <AppBasicInfo />
  <AppCompany />
  <AppAchievements />
  <AppHeadlines header="Наши проекты" />
  <AppWork />
  <AppHeadlines header="Услуги" />
  <AppServices />
  <AppHeadlines header="Принципы работы" />
  <AppPrinciples />
</template>

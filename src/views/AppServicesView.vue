<script>
import AppServices from '@/components/AppServices.vue'
import AppСhapter from '@/components/chapter/AppСhapter.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    AppServices,
    AppСhapter,
  },
})
</script>

<template>
  <AppСhapter title="Услуги" />
  <AppServices />
</template>

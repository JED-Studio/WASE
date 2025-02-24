<script>
import { defineComponent } from 'vue'
import AppHeader from './components/header/AppHeader.vue'

import AppFooter from './components/Footer/AppFooter.vue'

export default defineComponent({
  components: {
    AppHeader,

    AppFooter,
  },
  setup() {},
})
</script>

<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import AppHeader from './components/header/AppHeader.vue'
import AppFooter from './components/Footer/AppFooter.vue'

export default defineComponent({
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const isFadingOut = ref(false)

    onMounted(() => {
      document.body.style.overflow = 'hidden'
      setTimeout(() => {
        isFadingOut.value = true
        document.body.style.overflow = ''
      }, 2000)
    })

    return {
      isFadingOut,
    }
  },
})
</script>

<template>
  <div class="splash-screen" :class="{ 'fade-out': isFadingOut }">
    <img width="200" src="/public/image/вектор.svg" alt="Logo" />
  </div>
  <div>
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<style>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background-color-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 1;
  transition:
    opacity 0.5s ease-in-out,
    visibility 0.5s ease-in-out;
}

.fade-out {
  opacity: 0;
  visibility: hidden;
}
</style>

<template>
  <div class="app-logo__section">
    <div class="app-logo__container" ref="logoContainer">
      <div class="app-logo__wrapper" :style="{ transform: `translateX(${translateX}px)` }">
        <div class="logo" v-for="(logo, index) in logos" :key="index">
          <img :src="logo" alt="Logo" />
        </div>
        <div class="logo" v-for="(logo, index) in logos" :key="'duplicate-' + index">
          <img :src="logo" alt="Logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  setup() {
    const logos = ref([
      'image/вектор.svg',
      'image/вектор.svg',
      'image/вектор.svg',
      'image/вектор.svg',
      'image/вектор.svg',
      'image/вектор.svg',
      'image/вектор.svg',
      'image/вектор.svg',
      'image/вектор.svg',
    ])
    const translateX = ref(0)
    const speed = 0.5
    const logoContainer = ref(null)
    let animationFrameId

    const animate = () => {
      translateX.value -= speed
      if (Math.abs(translateX.value) >= logoContainer.value.scrollWidth / 2) {
        translateX.value = 0
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    onMounted(() => {
      animate()
    })

    onBeforeUnmount(() => {
      cancelAnimationFrame(animationFrameId)
    })

    return {
      logos,
      translateX,
      logoContainer,
    }
  },
}
</script>

<style scoped>
.app-logo__section {
  overflow: hidden;
}
.app-logo__container {
  margin-top: 16px;
}

.app-logo__wrapper {
  display: inline-flex;
  transition: transform 0.1s linear;
}

.logo {
  width: 100px;
  margin: 0 10px;
}
</style>

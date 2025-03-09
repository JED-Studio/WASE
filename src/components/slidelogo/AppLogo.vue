<template>
  <div class="app-logo__section">
    <div class="app-logo__container" ref="logoContainer">
      <div class="app-logo__wrapper" :style="{ transform: `translateX(${translateX}px)` }">
        <div class="logo" v-for="(logo, index) in logos" :key="index">
          <img :src="logo" alt="Logo" class="logo-image" />
        </div>
        <div class="logo" v-for="(logo, index) in logos" :key="'duplicate-' + index">
          <img :src="logo" alt="Logo" class="logo-image" />
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
      'image/климат.png',
      'svg/apteka.svg',
      'svg/header-logo.svg',
      'image/климат.png',
      'svg/apteka.svg',
      'svg/header-logo.svg',
      'image/климат.png',
      'svg/apteka.svg',
      'svg/header-logo.svg',
      'image/климат.png',
      'svg/apteka.svg',
      'svg/header-logo.svg',
      'image/климат.png',
      'svg/apteka.svg',
      'svg/header-logo.svg',
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
}

.app-logo__wrapper {
  display: inline-flex;
  align-items: center;
  transition: transform 0.1s linear;
}

.logo {
  width: 200px;
  margin: 0 40px;
}

.logo-image {
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.logo-image:hover {
  filter: grayscale(0%);
}
</style>

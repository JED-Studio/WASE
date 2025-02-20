Copy code
<template>
  <div class="logo-container" ref="logoContainer">
    <div class="logo-wrapper" :style="{ transform: `translateX(-${offset}px)` }">
      <div class="logo" v-for="(logo, index) in logos" :key="index">
        <img :src="logo" alt="Logo" />
      </div>
      <!-- Дублируем логотипы для бесконечной прокрутки -->
      <div class="logo" v-for="(logo, index) in logos" :key="'duplicate-' + index">
        <img :src="logo" alt="Logo" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  setup() {
    const logos = ref([
      '42527.svg',
      '42527.svg',
      '42527.svg',
      // Добавьте свои логотипы
    ])
    const offset = ref(0)
    const speed = 1 // Скорость прокрутки
    const logoContainer = ref(null)
    let animationFrameId

    const animate = () => {
      offset.value += speed
      if (offset.value >= logoContainer.value.scrollWidth / 2) {
        offset.value = 0 // Сбросить смещение
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
      offset,
      logoContainer,
    }
  },
}
</script>

<style scoped>
.logo-container {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}

.logo-wrapper {
  display: inline-flex;
  transition: transform 0.1s linear;
}

.logo {
  margin: 0 10px; /* Отступ между логотипами */
}

.logo img {
  height: 50px; /* Высота логотипа */
}
</style>

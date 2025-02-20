<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const logos = ref(['42527.svg', '42527.svg', '42527.svg', '42527.svg', '42527.svg'])
    return {
      logos,
    }
  },
})
</script>

<template>
  <div class="app-scroll__section">
    <div class="app-wace__container">
      <div class="app-scroll">
        <div class="app-scroll__inner">
          <img
            v-for="logo in logos"
            :src="logo"
            :key="logo"
            width="150"
            height="150"
            class="app-scroll__img"
          />
          <img
            v-for="logo in logos"
            :src="logo"
            :key="logo + '-copy'"
            width="150"
            height="150"
            class="app-scroll__img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-scroll__section {
  overflow: hidden;
}

.app-scroll {
  display: flex;
  overflow: hidden; /* Скрыть переполнение */
}

.app-scroll__inner {
  display: flex;
  animation: scroll 10s linear infinite; /* Анимация прокрутки */
  gap: 20px; /* Промежуток между логотипами */
}

.app-scroll__img {
  filter: grayscale(1);
  transition: filter 0.3s ease;
}

.app-scroll__img:hover {
  filter: none;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Прокручиваем на 50% ширины контента */
  }
}
</style>

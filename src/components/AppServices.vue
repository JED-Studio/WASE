<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const items = ref([
      {
        title: 'Мобильная разработка',
        text: 'Специализируемся на кроссплатформенной разработке и Flutter. Напишем чистый легко расширяемый и поддерживаемый код для разных платформ. Создадим приложение, которым будут пользоваться миллионы',
      },
      {
        title: 'Мобильная разработка',
        text: 'Специализируемся на кроссплатформенной разработке и Flutter. Напишем чистый легко расширяемый и поддерживаемый код для разных платформ. Создадим приложение, которым будут пользоваться миллионы',
      },
      {
        title: 'Мобильная разработка',
        text: 'Специализируемся на кроссплатформенной разработке и Flutter. Напишем чистый легко расширяемый и поддерживаемый код для разных платформ. Создадим приложение, которым будут пользоваться миллионы',
      },
      {
        title: 'Мобильная разработка',
        text: 'Специализируемся на кроссплатформенной разработке и Flutter. Напишем чистый легко расширяемый и поддерживаемый код для разных платформ. Создадим приложение, которым будут пользоваться миллионы',
      },
    ])

    return { items }
  },
})
</script>

<template>
  <div class="app-services__section">
    <div class="app-wace__container">
      <div class="app-services">
        <div class="app-services__header">Наши услуги</div>
        <div class="app-services__item">
          <div v-for="item in items" :key="item" class="app-services__items">
            <h2>{{ item.title }}</h2>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.app-services__header {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 28px;
  color: black;
}

.app-services__item {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.app-services__items {
  padding: 14px 20px;
  background-color: white;
  border-radius: 20px;
}
</style>

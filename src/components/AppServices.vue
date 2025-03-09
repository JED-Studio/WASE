<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const items = ref([
      {
        title: 'Мобильная разработка',
        text: 'Специализируемся на кроссплатформенной разработке и Flutter. Напишем чистый легко расширяемый и поддерживаемый код для разных платформ. Создадим приложение, которым будут пользоваться миллионы',
        image: 'svg/services/development.svg',
      },
      {
        title: 'Проектирование',
        text: 'Преобразуем идею в подробные требования и прототипы',
        image: 'svg/services/design_tool.svg',
      },
      {
        title: 'Создание MVP',
        text: 'Создание Прототипов Создание дизайна Разработка MVP',
        image: 'svg/services/trophy.svg',
      },
      {
        title: 'Web-разработка',
        text: 'Web-разработка, фронтенд и бэкенд. Разработаем эффективный сайт для ваших пользователей, найдем лучшее решение по сочетанию технологий и юзабилити',
        image: 'svg/services/web_development.svg',
      },
      {
        title: 'Аутстафф команды',
        text: 'Усилим вашу IT-команду своими специалистами',
        image: 'svg/services/team.svg',
      },
      {
        title: 'Дизайн продукта',
        text: 'Создадим эффективный интерфейс – удобный и понятный вашему пользователю',
        image: 'svg/services/product_design.svg',
      },
      {
        title: 'Поддержка IT-сервисов',
        text: 'Будем развивать продукт для ваших пользователей. Оказываем расширенные сервисы поддержки.',
        image: 'svg/services/graph.svg',
      },
      {
        title: 'Разработка приложений',
        text: 'Напишем чистый легко расширяемый и поддерживаемый код для разных платформ. Создадим приложение, которым будут пользоваться миллионы.',
        image: 'svg/services/apps_development.svg',
      },
      {
        title: 'Тестирование',
        text: 'Тщательная проверка работоспособности сервисов. Проконтролируем качество решения на всех этапах разработки',
        image: 'svg/services/testing.svg',
      },
      {
        title: 'IT-аудит',
        text: 'Проанализируем и оценим ваш IT-продукт, подскажем, что хорошо, а что стоит исправить',
        image: 'svg/services/audit.svg',
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
        <div class="app-services__item">
          <div
            v-for="item in items"
            :key="item"
            class="app-services__items cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
          >
            <img :src="item.image" alt="" />
            <h2>{{ item.title }}</h2>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.app-services__section {
  margin-bottom: 100px;
}

.app-services__item {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.app-services__items {
  padding: 14px 20px;
  background-color: var(--background-color-secondary);
  border-radius: 20px;
}

.app-services__items > img {
  width: 40px;
  margin-bottom: 20px;
}

.app-services__items > h2 {
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 28px;
  color: black;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .app-services__item {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

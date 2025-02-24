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
        title: 'Проектирование',
        text: 'Преобразуем идею в подробные требования и прототипы',
      },
      {
        title: 'Создание MVP',
        text: 'Создание Прототипов Создание дизайна Разработка MVP',
      },
      {
        title: 'Web-разработка',
        text: 'Web-разработка, фронтенд и бэкенд. Разработаем эффективный сайт для ваших пользователей, найдем лучшее решение по сочетанию технологий и юзабилити',
      },
      {
        title: 'Аутстафф команды',
        text: 'Усилим вашу IT-команду своими специалистами',
      },
      {
        title: 'Дизайн продукта',
        text: 'Создадим эффективный интерфейс – удобный и понятный вашему пользователю',
      },
      {
        title: 'Поддержка IT-сервисов',
        text: 'Будем развивать продукт для ваших пользователей. Оказываем расширенные сервисы поддержки.',
      },
      {
        title: 'Разработка приложений',
        text: 'Напишем чистый легко расширяемый и поддерживаемый код для разных платформ. Создадим приложение, которым будут пользоваться миллионы.',
      },
      {
        title: 'Тестирование',
        text: 'Тщательная проверка работоспособности сервисов. Проконтролируем качество решения на всех этапах разработки',
      },
      {
        title: 'IT-аудит',
        text: 'Проанализируем и оценим ваш IT-продукт, подскажем, что хорошо, а что стоит исправить',
      },
      {
        title: 'Разработка сайтов',
        text: 'Web-разработка, фронтенд и бэкенд',
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
          <div
            v-for="item in items"
            :key="item"
            class="app-services__items border border-slate-100 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
          >
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

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const items = [
      {
        title: '1 млн+',
        subtitle: 'Пользователей наших решений',
      },
      {
        title: '100%',
        subtitle: 'Довольных клиентов',
      },
      {
        title: '70+',
        subtitle: 'Реализованных проектов',
      },
      {
        title: '4+',
        subtitle: 'Лет сотрудничества с проектами',
      },
    ]

    return { items }
  },
})
</script>

<template>
  <div class="app-achievements__section">
    <div class="app-wace__container">
      <div class="app-achievements">
        <div v-for="item in items" :key="item" class="app-achievements__item">
          <h2>{{ item.title }}</h2>
          <p>{{ item.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.app-achievements__section {
  margin-bottom: 100px;
}
.app-achievements {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background-color: white;
  border-radius: 20px;
}

.app-achievements__item > h2 {
  color: black;
  font-size: 3.75rem;
  font-weight: 600;
  line-height: normal;
}

.app-achievements__item > p {
  color: rgb(22, 22, 22);
  font-size: 1.45rem;
  font-weight: 500;
  line-height: normal;
  max-width: 220px;
}
</style>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const items = ref([
      {
        id: 1,
        text: 'Платформа для Российского венчурного бизнеса',
        image: 'image/apteka.png',
      },
    ])

    return {
      items,
    }
  },
})
</script>

<template>
  <div class="app-work__section">
    <div class="app-wace__container">
      <div class="app-work">
        <div class="app-work__header">
          <h3>Наши проекты</h3>
          <p>Показать все</p>
        </div>
        <div class="app-work__items">
          <RouterLink
            v-for="item in items"
            :key="item.id"
            :to="{ name: 'project', params: { id: item.id } }"
            class="app-work__item border border-slate-100 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div class="app-work__img">
              <img :src="item.image" alt="" />
            </div>
            <div class="app-work__text">
              <h4>{{ item.text }}</h4>
              <div class="app-work__platform">
                <span>Платформа</span>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.app-work__section {
  margin-bottom: 100px;
}

.app-work__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 14px 20px;
}

.app-work__items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.app-work__item {
  flex-direction: column;
  display: flex;
  border-radius: 10px;
  background-color: white;
}

.app-work__text {
  padding: 20px;
}

.app-work__img {
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
}

h4 {
  font-weight: 500;
  font-size: 1.375rem;
  line-height: 28px;
  color: black;
  margin-bottom: 20px;
}

.app-work__platform > span {
  font-weight: 400;
  font-size: 0.875rem;
  color: #515151;
  padding: 4px 16px;
  background: white;
  border-radius: 20px;
  border: 1px solid gray;
}

@media (max-width: 768px) {
  .app-work__items {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

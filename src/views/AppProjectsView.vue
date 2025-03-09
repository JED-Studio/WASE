<script>
import AppWork from '@/components/works/AppWork.vue'
import { defineComponent } from 'vue'
import AppСhapter from '@/components/chapter/AppСhapter.vue'

export default defineComponent({
  components: {
    AppWork,
    AppСhapter,
  },
  setup() {},
})
</script>

<template>
  <AppСhapter title="Проекты" />
  <div class="app-projects__section">
    <div class="app-wace__container">
      <div class="app-projects">
        <h2>Проекты</h2>
        <div class="app-projects__categories">
          <h3>Категории</h3>
          <div>
            <p>WEB-приложение</p>
            <p>Мобильное приложение</p>
          </div>
        </div>
        <div class="app-projects__categories">
          <h3>Категории</h3>
          <div>
            <p>WEB-приложение</p>
            <p>Мобильное приложение</p>
          </div>
        </div>

        <h3>Все проекты</h3>
      </div>
    </div>
  </div>
  <AppWork />
</template>

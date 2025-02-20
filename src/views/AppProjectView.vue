<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    const projects = ref([
      {
        id: 1,
        title: 'Единая платформа создания сайтов для министерства связи РД',
        category: 'Платформа',
        image: '/public/web.png',
        description: 'Описание проекта 1',
        aboutProject: 'Информация о проекте 1',
        featuresProject: 'Особенности проекта 1',
        task: 'Задача проекта 1',
        titleDecision: 'Решение проекта 1',
        descriptionDecision: 'Описание решения 1',
        linkDecision: 'Ссылка на решение 1',
        textDesign: 'Дизайн проекта 1',
        textTexnology: 'Технологии проекта 1',
        textResult: 'Результат проекта 1',
      },
      {
        id: 2,
        title: 'Пидор',
        category: 'Платформа',
        image: '/public/project.png',
        description: 'Описание проекта 1',
        aboutProject: 'Информация о проекте 1',
        featuresProject: 'Особенности проекта 1',
        task: 'Задача проекта 1',
        titleDecision: 'Решение проекта 1',
        descriptionDecision: 'Описание решения 1',
        linkDecision: 'Ссылка на решение 1',
        textDesign: 'Дизайн проекта 1',
        textTexnology: 'Технологии проекта 1',
        textResult: 'Результат проекта 1',
      },
    ])

    const project = ref(null)

    onMounted(() => {
      const projectId = parseInt(route.params.id)
      project.value = projects.value.find((p) => p.id === projectId)
    })

    return {
      project,
      projects,
    }
  },
})
</script>
<template>
  <div class="app-project__section" v-if="project">
    <div class="app-wace__container">
      <div class="app-project">
        <div class="app-project__items">
          <div class="app-project__text">
            <h2>{{ project.title }}</h2>
            <p>{{ project.category }}</p>
            <p>{{ project.description }}</p>
          </div>
          <div class="app-project__img">
            <img :src="project.image" alt="" />
          </div>
        </div>

        <div>
          <h3>О проекте</h3>
          <p>{{ project.aboutProject }}</p>
        </div>
        <div>
          <h3>Особенности проекта</h3>
          <p>{{ project.featuresProject }}</p>
          <p>{{ project.featuresProject }}</p>
          <p>{{ project.featuresProject }}</p>
        </div>
        <div>
          <h3>Задача</h3>
          <p>{{ project.task }}</p>
          <p>{{ project.task }}</p>
        </div>
        <div>
          <h3>Решение</h3>
          <p>{{ project.titleDecision }}</p>
          <p>{{ project.descriptionDecision }}</p>
          <p>{{ project.linkDecision }}</p>
        </div>
        <div>
          <h3>Дизайн</h3>
          <p>{{ project.textDesign }}</p>
        </div>
        <div>
          <h3>Цветовая палитра</h3>
          <div>
            <div></div>
            <p>Главный цвет</p>
          </div>
          <div>
            <div></div>
            <p>Фон</p>
          </div>
          <div>
            <div></div>
            <p>Границы</p>
          </div>
          <div>
            <div></div>
            <p>Наведение</p>
          </div>
        </div>
        <div>
          <h3>Выбор оптимальных технологий</h3>
          <p>{{ project.textTexnology }}</p>
        </div>
        <div>
          <h3>Результат работы</h3>
          <p>{{ project.textResult }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-project__items {
  display: flex;
  background-color: white;
  border-radius: 20px;
}

.app-project__text {
  flex: 50%;
  padding: 20px;
}
.app-project__text > h2 {
  font-weight: 500;
  font-size: 2.75rem;
  line-height: 50px;
  margin-bottom: 20px;
}
.app-project__text > p {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 24px;
}
.app-project__img {
  flex: 50%;
  background-color: yellowgreen;
  border-radius: 20px;
}
</style>

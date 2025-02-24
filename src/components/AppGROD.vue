<template>
    <div>
      <h1>Детали проекта</h1>
      <p>{{ project.text }}</p>
      <img :src="project.image" alt="" />
    </div>
  </template>
  
  <script>
  import { defineComponent, ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  export default defineComponent({
    setup() {
      const route = useRoute()
      const project = ref({})
  
      const items = [
        {
          id: 1,
          text: 'Платформа для Российского венчурного бизнеса',
          image: 'image/project.png',
        },
        {
          id: 2,
          text: 'Проект 2',
          image: 'image/project2.png',
        },
        {
          id: 3,
          text: 'Проект 3',
          image: 'image/project3.png',
        },
        // Добавьте другие проекты с уникальными идентификаторами...
      ]
  
      onMounted(() => {
        const projectId = parseInt(route.params.id) // Получаем id из параметров маршрута
        project.value = items.find(item => item.id === projectId) // Находим проект по id
      })
  
      return {
        project,
      }
    },
  })  
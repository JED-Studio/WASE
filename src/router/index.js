import AppAboutUsView from '@/views/AppAboutUsView.vue'
import AppProjectView from '@/views/AppProjectView.vue'
import HomeView from '@/views/HomeView.vue'
import AppProjectsView from '@/views/AppProjectsView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AppServicesView from '@/views/AppServicesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      name: 'project',
      path: '/project/:id',
      component: AppProjectView,
    },
    {
      name: 'about',
      path: '/about',
      component: AppAboutUsView,
    },
    {
      name: 'projects',
      path: '/projects',
      component: AppProjectsView,
    },
    {
      name: 'services',
      path: '/services',
      component: AppServicesView,
    },
  ],
})

export default router

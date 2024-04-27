import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/list'
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/list/index.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/views/create/index.vue')
    }
  ]
})

export default router

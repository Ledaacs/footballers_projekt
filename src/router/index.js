import { createRouter, createWebHistory } from 'vue-router'
import Szakkorok from '../views/focistak.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('../views/focistak.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('../views/cards.vue')
    },
    
  ]
})

export default router

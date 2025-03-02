import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Splitbill.vue'
import Hasil from '../views/Hasil.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/hasil',
      name: 'results',
      component: Hasil,
    },
  ],
})

export default router

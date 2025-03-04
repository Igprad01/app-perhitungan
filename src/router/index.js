import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Splitbill.vue'
import Hasil from '../views/Hasil.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Spilbill',
      component: HomeView,
    },
    {
      path: '/hasil',
      name: 'hasil',
      component: Hasil,
    },
  ],
})

export default router

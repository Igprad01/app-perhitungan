import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Splitbill.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Spilbill',
      component: HomeView,
    },
  ],
})

export default router

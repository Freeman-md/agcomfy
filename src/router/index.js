import { createRouter, createWebHistory } from 'vue-router'
import LandingRoutes from './landing.js'

const routes = [
  ...LandingRoutes,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
})

export default router

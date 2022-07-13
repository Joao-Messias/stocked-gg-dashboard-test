import { createRouter, createWebHashHistory } from 'vue-router'
import ClipsView from '../views/ClipsView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/clips',
    name: 'clips',
    component: ClipsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

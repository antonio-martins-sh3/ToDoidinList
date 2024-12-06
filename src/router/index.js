import { createWebHistory, createRouter } from 'vue-router'

import TodosView from '../views/TodosView.vue'
import CompletedView from '../views/CompletedView.vue'

const routes = [
  { path: '/', component: TodosView },
  { path: '/completed', component: CompletedView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

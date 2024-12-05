import { createMemoryHistory, createRouter } from 'vue-router'

import TodosView from '../views/TodosView.vue'
/*import CompletedView from './CompletedView.vue'*/

const routes = [
  { path: '/', component: TodosView },
  /*{ path: '/completed', component: CompletedView },*/
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router

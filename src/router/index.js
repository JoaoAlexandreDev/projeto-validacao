import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/produto',
      name: 'produto',
      component: () => import('../views/ProdutoView.vue')
    },
    {
      path: '/add-produto',
      name: 'add-produto',
      component: () => import('../views/AddProdutoView.vue')
    }
  ]
})

export default router

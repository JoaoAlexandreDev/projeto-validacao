import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/produto',
      name: 'Produtos',
      component: () => import('../views/ProdutoView.vue')
    },
    {
      path: '/adicionar-produto',
      name: 'Adicionar Produtos',
      component: () => import('../views/AddProdutoView.vue')
    },
    {
      path: '/editar-produto/:id',
      name: 'Editar Produto',
      component: () => import('../views/AddProdutoView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = "Controle Almoxarifado - " + to.name;
  next();
});

export default router

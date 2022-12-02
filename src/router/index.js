import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)',
      name: '404',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pre',
      name: 'pre',     
      component: () => import('../views/pre/PreAnestesicoView.vue')
    },
    {
      path: '/trans',
      name: 'trans',     
      component: () => import('../views/trans/TransAnestesicoView.vue')
    },
    {
      path: '/post',
      name: 'post',     
      component: () => import('../views/post/PostAnestesicoView.vue')
    },
    {
      path: '/nota',
      name: 'nota',     
      component: () => import('../components/pre/Nota.vue')
    }
  ]
})

export default router

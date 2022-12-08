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
      path: '/id',
      name: 'id',     
      component: () => import('../components/pre/Id.vue')
    },  
    {
      path: '/valoracion',
      name: 'valoracion',     
      component: () => import('../components/pre/Valoracion.vue')
    },    
    {
      path: '/plan',
      name: 'plan',     
      component: () => import('../components/pre/Plan.vue')
    },
    {
      path: '/nota',
      name: 'nota',     
      component: () => import('../components/pre/Nota.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

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
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../views/RegistroView.vue')
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
      path: '/medicamentos',
      name: 'medicamentos',     
      component: () => import('../views/menu/Medicamentos.vue')
    }
  ]
})

/*router.beforeEach((to, from, next) => {
  return '/'
})*/

export default router

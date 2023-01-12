import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

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
      component: LoginView
    },
    {
      path: '/',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
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
    }
  ]
});

export default router

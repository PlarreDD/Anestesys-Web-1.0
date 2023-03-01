import { useUserStore } from '@/stores/user-store';
import { createRouter,
         createWebHistory } from 'vue-router'

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
/************************************************************************/
/*------------------------- Rutas Protegidas ---------------------------*/
/************************************************************************/
    {
      path: '/pre',
      name: 'pre',     
      component: () => import('../views/pre/PreAnestesicoView.vue'),
      meta:{
        auth: true
      }
    },

    {
      path: '/trans',
      name: 'trans',     
      component: () => import('../views/trans/TransAnestesicoView.vue'),
      meta:{
        auth: true
      }
    },
    
    {
      path: '/post',
      name: 'post',     
      component: () => import('../views/post/PostAnestesicoView.vue'),
      meta:{
        auth: true
      }
    },
    
    {
      path: '/medicamentos',
      name: 'medicamentos',     
      component: () => import('../views/menu/Medicamentos.vue'),
      meta:{
        auth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiredAuth = to.meta.auth;
  const userStore = useUserStore();

  // Autenticacion de usuario
  if (requiredAuth) {
    if (userStore.token)
      return next()
      
    return next("/");
  }
  
  next();
})

export default router

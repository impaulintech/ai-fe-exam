import Dashboard from '@/views/Dashboard/index.vue'
import LoginView from '@/views/LoginView/index.vue'
import { createRouter, createWebHistory } from 'vue-router'

const isAuthenticated = () => {
  // Update this temporary function to check if the user is authenticated
  // Get response from API if user is authenticated
  return localStorage.getItem('user') !== null
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: {
        public: true,
      },
    },
    {
      path: '/dashboard',
      name: 'writer-dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/dashboard',
      name: 'editor-dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
  ],
})

router.beforeEach((to, _from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

import EditorDashboard from '@/views/EditorDashboard.vue'
import LoginView from '@/views/LoginView.vue'
import WriterDashboard from '@/views/WriterDashboard.vue'
import { createRouter, createWebHistory } from 'vue-router'

const isAuthenticated = () => {
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
      path: '/writer-dashboard',
      name: 'writer-dashboard',
      component: WriterDashboard,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/editor-dashboard',
      name: 'editor-dashboard',
      component: EditorDashboard,
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

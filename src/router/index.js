import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/accountactivations',
    name: 'AccountActivationsEdit',
    component: () => import('../views/AccountActivations/Edit.vue')
  },
  {
    path: '/passwordresets/new',
    name: 'PasswordResetsNew',
    component: () => import('../views/PasswordResets/New.vue')
  },
  {
    path: '/passwordresets',
    name: 'PasswordResetsEdit',
    component: () => import('../views/PasswordResets/Edit.vue')
  },
  {
    path: '/updatepassword',
    name: 'UpdatePassword',
    component: () => import('../views/UpdatePassword.vue')
  },
  {
    path: '/userposts',
    name: 'UserPosts',
    component: () => import('../views/UserPosts.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Admin/Users.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

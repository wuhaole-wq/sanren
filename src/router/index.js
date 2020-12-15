import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import headRouter from '../components/headRouter.vue'
import login from '../views/login.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/headRouter',
    name: 'headrRouter',
    component: headRouter
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

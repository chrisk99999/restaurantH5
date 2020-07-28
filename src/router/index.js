import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    meta: { showTabbar: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    meta: { showTabbar: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/mine.vue')
  },
  {
    path: '/mesg',
    name: 'Mesg',
    meta: { showTabbar: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/mesg.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

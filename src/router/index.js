import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Services from '@/components/PublicWebPages/Services'
import About from '@/components/PublicWebPages/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

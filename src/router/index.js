import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from '../firebase/config'
import Home from '../views/Home.vue'

const requiredAuth = ( to, from, next ) =>{
  let user = projectAuth.currentUser
  if( !user ){
    next({ name: 'Login'})
  } else {
    next()
  }
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requiredAuth
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/Signup.vue')
  },
  {
    path: '/playlist/create',
    name: 'CreatePlaylist',
    component: () => import(/* webpackChunkName: "about" */ '../views/playlist/CreatePlaylist.vue'),
    beforeEnter: requiredAuth
  },
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

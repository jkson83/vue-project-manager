import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import Nested from '../views/NestedComponent.vue'
import ComponentEx from '../views/ParentComponent2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  },
  {
    path: '/Nested',
    name: 'Nested',
    component: Nested
  },
  {
    path: '/ComponentEx',
    name: 'ComponentEx',
    component: ComponentEx
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

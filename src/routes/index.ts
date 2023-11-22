// router.ts
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', component:()=>import('../pages/PageHome.vue') },
  { path: '/shop', component:()=>import('../pages/PageProductList.vue') },
  { path: '/Cart', component: ()=>import('../pages/PageCart.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

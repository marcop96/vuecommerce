// router.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductList from '../views/ProductList.vue'
import ProductDetails from '../views/ProductDetails.vue'
import FAQ from '../views/FAQ.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: ProductList },
  { path: '/FAQ', component: FAQ },
  { path: '/products/:id', component: ProductDetails },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

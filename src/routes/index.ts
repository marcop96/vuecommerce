// router.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetails from '../views/ProductDetails.vue'
import FAQ from '../views/FAQ.vue'

import CartComponent from '../components/CartComponent.vue'
import ProductList from '../components/ProductList.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/shop', component: ProductList },
  { path: '/FAQ', component: FAQ },
  { path: '/Cart', component: CartComponent },
  { path: '/products/:id', component: ProductDetails },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

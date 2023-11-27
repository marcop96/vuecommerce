// router.ts
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../pages/PageHome.vue') },
  { path: '/shop', component: () => import('../pages/PageProductList.vue') },
  { path: '/Cart', component: () => import('../pages/PageCart.vue') },
  {
    path: '/product/:id',
    name: 'product-details',
    component: () => import('../pages/PageProductDetails.vue'),
    props: true,
    beforeEnter: (to, from, next) => {
      console.log(to)
      fetchData(to.params.id)
        .then((productData) => {
          to.params.productData = productData
          next()
        })
        .catch((error) => {
          console.error('Error fetching product data:', error)
        })
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

function fetchData(id: number) {
  return fetch(`https://dummyjson.com/products/${id}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Error fetching product data: ${response.statusText}`)

      return response.json()
    })
    .catch((error) => {
      throw error
    })
}

export default router

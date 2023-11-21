<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '../types'
import CartComponent from './components/CartComponent.vue'
import NavBar from './components/NavBar.vue'
import ProductList from './components/ProductList.vue'

const cart = ref<Product[] | undefined>(undefined)
function updateCartHandler(updatedCart: Product[]) {
  cart.value = updatedCart
}
</script>

<template>
  <NavBar />
  <router-view />
  <div>
    <CartComponent :products="cart" />
    <ProductList @update-cart="updateCartHandler" />
  </div>
</template>

<style scoped>

</style>

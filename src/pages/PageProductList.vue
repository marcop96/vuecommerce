<script lang="ts" setup>
import { ref } from 'vue'
import type { Product } from '../../types.js'
import ProductList from '../components/ProductList.vue'

const cart = ref<Product[]>([])

function updateCartHandler(updatedCart: Product[]) {
  console.log('Received updated cart:', updatedCart)
  cart.value = updatedCart
}
</script>

<template>
  <ProductList @update-cart="updateCartHandler" />
</template>

<style>
</style>

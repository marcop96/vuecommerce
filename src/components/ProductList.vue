<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Product } from '../../types'
import ProductCard from './ProductCard.vue'

const emit = defineEmits(['updateCart'])
const API_URL = 'https://dummyjson.com/products'
const products = ref<Product[] | undefined>(undefined)
onMounted(() => {
  fetch(API_URL)
    .then(res => res.json())
    .then((data) => {
      products.value = data.products.map((product: Product) => ({ ...product, quantity: 1 }))
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
})
const cart = ref<Product[]>([])

function addToCartHandler(product: Product) {
  const existingProductIndex = cart.value.findIndex(item => item.id === product.id)
  if (cart.value.some(item => item.id === product.id))
    cart.value[existingProductIndex].quantity++

  else
    cart.value.push((product))
  emit('updateCart', cart.value)
  
}
</script>

<template>
  <div class="grid grid-cols-4 gap-2">
    <ProductCard v-for="product in products" :key="product.id" :product="product" @add-to-cart="addToCartHandler" />
  </div>
</template>

<style></style>

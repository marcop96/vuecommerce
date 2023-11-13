<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Product } from '../../types'
import ProductCard from './ProductCard.vue'

const API_URL = 'https://dummyjson.com/products'
const products = ref<Product[] | undefined>(undefined)

onMounted(() => {
  fetch(API_URL)
    .then(res => res.json())
    .then((data) => {
      products.value = data.products
    })
    .catch((error) => {
      console.error('Error fetching data:', error)
    })
})
</script>

<template>
  <div class="grid grid-cols-4">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<style></style>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import type { Product } from '../../types';
import ProductCard from '../components/ProductCard.vue';
import { useStore } from '../composable/useStore';

const { handleIncrement } = useStore()

const API_URL = 'https://dummyjson.com/products'
const products = ref<Product[] | undefined>(undefined)
// !TODO fix fetches when mounting this every single time
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
</script>

<template>
  <div class="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
    <ProductCard v-for="product in products" :key="product.id" :product="product" @add-to-cart="handleIncrement" />
  </div>
</template>

<style>
</style>

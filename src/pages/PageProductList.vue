<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import type { Product } from '../../types';
import ProductCard from '../components/ProductCard.vue';

const emit = defineEmits(['addProduct'])
const API_URL = 'https://dummyjson.com/products'
const products = ref<Product[] | undefined>(undefined)
//!TODO fix fetches when mounting this 
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

function addToCartHandler(e:Product){
  console.log(e)
   emit('addProduct', e)
}
</script>

<template>

<div class="grid grid-cols-4 gap-2">
    <ProductCard v-for="product in products" :key="product.id" :product="product" @add-to-cart="addToCartHandler" />
  </div>
</template>

<style>
</style>

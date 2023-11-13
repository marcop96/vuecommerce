<script lang="ts" setup>
import type { Product } from '../../types'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class=" p-2 h-80 rounded-lg m-2 bg-red-500">
    <p>{{ product.title }}</p>
    <img :src="product.images[0]">
    <p>{{ product.price }}</p>
  </div>
</template>

<style>
</style>

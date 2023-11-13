<script lang="ts" setup>
import type { Product } from '../../types'

defineProps<{
  product: Product
}>()
</script>

<template>
  <article class=" w-86 flex m-2 h-full flex-col items-center justify-between rounded-lg bg-blue-500  shadow transition-transform  duration-75 hover:scale-[1.01] hover:shadow-lg card-container  ">
    <h3 class="text-center text-xl">{{ product.title }}</h3>
    <figure class="h-64 bg-red-500"><img class="object-contain h-full w-full" :src="product.thumbnail"> </figure>
    <span>${{ product.price }}</span>
    <button class="bg-blue-600 hover:bg-blue-400 rounded-full p-2">Add to Cart</button>
  </article>
</template>

<style>
</style>

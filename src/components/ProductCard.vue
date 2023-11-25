<script lang="ts" setup>
import type { Product } from '../../types';

defineProps<{
  product: Product
}>()
defineEmits(['addToCart'])
</script>

<template>
  <article class=" w-86 flex m-2 p-2 h-full flex-col items-center justify-between rounded-lg bg-blue-500  shadow transition-transform  duration-75 hover:scale-[1.01] hover:shadow-lg card-container  ">
    <figure class="h-36 ">
      <router-link :props="product.id" :to="`/product/${product.title}` ">
        <img class="object-contain h-full w-full" :src="product.thumbnail" :alt="product.title">
      </router-link>
    </figure>
    <h3 class="text-center text-xl">{{ product.title }}</h3>
    <span class="overflow-auto">{{ product.description }}</span>
    <span>${{ product.price }}</span>
    <button class="bg-blue-600 hover:bg-blue-400 rounded-full p-2" @click="$emit('addToCart', product)">Add to Cart</button>
  </article>
</template>

<style>
</style>

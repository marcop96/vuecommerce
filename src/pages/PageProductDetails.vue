<script setup lang="ts">
import type { Product } from '../../types';

defineProps<{
  productData: Product
}>()
</script>

<template>
  <div class="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
    <div class="grid gap-4">
      <img :src="productData.images[0]" alt="Product Image" width="600" height="600" class="aspect-square object-cover border border-zinc-200 w-full rounded-lg overflow-hidden dark:border-zinc-800"><div class="flex gap-4">
        <img v-for="(image, index) in productData.images" :key="index" :src="image" alt="Product Image" width="100" height="100" class="aspect-square object-cover border border-zinc-200 w-full rounded-lg overflow-hidden dark:border-zinc-800">
      </div>
    </div><div class="grid gap-4 md:gap-10 items-start">
      <h1 class="font-bold text-3xl">
        {{ productData.title }}
      </h1><div class="text-4xl font-bold">{{ productData.price }}</div><div><p>{{ productData.description }}</p></div><div class="grid gap-2">
        <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" for="rating">
          Rating: {{ productData.rating }}
        </label><div class="text-sm"><p>{{ productData.category }}</p></div>
      </div>
    </div>
  </div>
</template>

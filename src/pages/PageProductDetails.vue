<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { Product } from '../../types';
import { useStore } from '../composable/useStore';

const props = defineProps<{
  productData: Product
}>()

const { handleIncrement } = useStore()
const activeImage = ref<string>(props.productData.images[0])
const setActiveImage = (image: string) => {
  activeImage.value = image
}
</script>

<template>
  <div class="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
    <div class="grid gap-4">
      <img id="main-img" :src="activeImage" alt="Product Image" width="600" height="600" class="aspect-square object-cover border border-zinc-200 w-full rounded-lg overflow-hidden dark:border-zinc-800 "><div class="flex gap-4">
        <img v-for="(image, index) in productData.images" :key="index" :src="image" alt="Product Image" width="100" height="100" class="aspect-square object-cover  rounded-lg border border-zinc-200   overflow-hidden dark:border-zinc-800" @click="setActiveImage(image)">
      </div>
    </div><div class="grid gap-4 md:gap-10 items-start">
      <h1 class="font-bold text-3xl">
        {{ productData.title }}
      </h1><div class="text-4xl font-bold">${{ productData.price }}</div><div><p>{{ productData.description }}</p></div><div class="grid gap-2">
        <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" for="rating">
          Rating: {{ productData.rating }}
        </label><div class="text-sm"><p>{{ productData.category }}</p></div>
      </div>
      <button class="bg-blue-600 hover:bg-blue-400 rounded-full p-2 text-white" @click="handleIncrement(productData)">Add to Cart</button>
    </div>
  </div>
</template>

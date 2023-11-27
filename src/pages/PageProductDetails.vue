<script setup lang="ts">
import type { Product } from '../../types';

defineProps<{
  productData: Product
}>()
</script>

<template>
  <div class="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
    <div class="flex">
      <div class="w-1/2">
        <img
          v-for="(image, index) in productData.images"
          :key="index"
          :src="image"
          :alt="productData.title"
          class="mb-4 rounded-lg shadow-lg"
        >
      </div>
      <div class="w-1/2 ml-8">
        <h2 class="text-4xl font-semibold mb-4 text-gray-800">{{ productData.title }}</h2>
        <p class="text-gray-600 text-lg">{{ productData.description }}</p>
        <div class="mt-6">
          <p class="text-2xl font-bold text-blue-600 mb-2">
            ${{ productData.price }}
            <span class="text-gray-500 line-through ml-2">${{ productData.price }}</span>
          </p>
          <div class="flex items-center space-x-4">
            <div class="flex items-center">
              <p class="text-gray-800">{{ productData.rating }}/5</p>
            </div>
            <p class="text-gray-800">Stock: {{ productData.stock }} available</p>
          </div>
          <p class="text-gray-800">Brand: {{ productData.brand }}</p>
          <p class="text-gray-800">Category: {{ productData.category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

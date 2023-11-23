<script lang="ts" setup>
import { useStore } from '../composable/useStore';

const { products: productStore, handleDecrement, handleIncrement } = useStore()
</script>

<template>
  <div class="w-full max-w-xl mx-auto mt-6">
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden" data-v0-t="card">
      <div class="p-6 divide-y space-y-6">
        <div v-for="product in productStore" :key="product.id" class="flex items-center space-x-4">
          <img
            :src="product.thumbnail"
            width="60"
            height="60"
            alt="Product Image"
            class="rounded-md"
            style="aspect-ratio: 60 / 60; object-fit: cover;"
          >
          <div class="flex-grow">
            <h2 class="font-semibold text-lg">{{ product.title }}</h2>
            <div class="text-sm text-gray-500">Price: ${{ product.price }}</div>
          </div>
          <div class="text-right">
            <div class="flex items-center justify-end space-x-2">
              <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2" @click="handleDecrement(product)">
                -
              </button>
              <div>{{ product.quantity }}</div>
              <button
                class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                @click="handleIncrement(product)"
              >
                +
              </button>
            </div>
            <div>
              ${{ product.price * product.quantity }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

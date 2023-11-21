<script lang="ts" setup>
import { computed } from 'vue'
import type { Product } from '../../types'

const props = defineProps<{ products: Product[] | undefined }>()
const totalPrice = computed(() => props.products ? props.products.reduce((total: number, product: Product) => total + product.price * product.quantity, 0) : 0)
</script>

<template>
  <main>
    <ul>
      <li v-for="product in products" :key="product.id">
        <div v-if="product.quantity > 0" id="product-info" class="w-screen max-w-24 flex flex-row m-2 items-center ">
          <img class="h-20 w-20" :src="product.thumbnail"> <h2 class="m-3"> {{ product.title }}</h2> <button @click="product.quantity--">- </button>
          <span class="text-sm">{{ product.quantity }}</span>

          <button @click="product.quantity++">+</button>
          <button @click="product.quantity = 0">delete</button>
        </div>
      </li>
    </ul>
    <span> {{ totalPrice }}</span>
  </main>
</template>

<style>
</style>

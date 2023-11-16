<script lang="ts" setup>
import type { Product } from '../../types'

defineProps<{ products: Product[] | undefined }>()
</script>

<template>
  <main>
    <ul>
      <li v-for="product in products" :key="product.id">
        <div v-if="product.quantity > 0" id="product-info" class="w-screen max-w-24 flex flex-row m-2 items-center ">
          <img class="h-20 w-20" :src="product.thumbnail"> <h2 class="m-3"> {{ product.title }}</h2> <button @click="product.quantity--">- </button>
          <input
            v-model="product.quantity" type="number"
            class="appearance-none w-12 py-2 px-3 leading-tight rounded-md focus:outline-none focus:shadow-outline-blue"
          >

          <button @click="product.quantity++">+</button>

          quantity : {{ product.quantity }}
        </div>
      </li>
    </ul>
  </main>
</template>

<style>
</style>

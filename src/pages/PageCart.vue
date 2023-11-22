<script lang="ts" setup>
import { useStore } from '../composable/useStore';

const { products: productStore } = useStore()
</script>

<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="product in productStore" :key="product.id">
        {{ product.title }} - Quantity: {{ product.quantity }}
      </li>
    </ul>
  </div>
</template>

<style>
</style>

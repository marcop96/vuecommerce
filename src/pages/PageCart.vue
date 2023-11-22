<script lang="ts" setup>
import { useStore } from '../composable/useStore';

const { product: productStore } = useStore()
</script>

<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - Quantity: {{ product.quantity }}
      </li>
    </ul>
  </div>
</template>

<style>
</style>

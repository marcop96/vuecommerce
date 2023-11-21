<script lang="ts" setup>
import CartComponent from '../components/CartComponent.vue'

defineProps({
  cart: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <CartComponent :products="cart" />
  <div>CART</div>
</template>

<style>
</style>

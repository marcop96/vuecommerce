<script setup lang="ts">
// import CartComponent from './components/CartComponent.vue'
import NavBar from './components/NavBar.vue'

// import ProductList from './components/ProductList.vue'
</script>

<template>
  <NavBar />
  <router-view />
  <div>
    <!-- <CartComponent :products="cart" />
    <ProductList @update-cart="updateCartHandler" /> -->
  </div>
</template>

<style scoped>

</style>

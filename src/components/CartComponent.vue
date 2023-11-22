<script setup lang="ts">



// function addToCartHandler(product: Product) {
//   const existingProductIndex = cart.value.findIndex(item => item.id === product.id)
//   if (cart.value.some(item => item.id === product.id))
//     cart.value[existingProductIndex].quantity++

//   else
//     cart.value.push((product))
//   emit('updateCart', cart.value)
//   console.log((cart.value))
// }
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

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from '../composable/useStore';

const { products: productStore, handleDecrement, handleIncrement } = useStore()

const totalPrice = computed(() =>
  productStore.value.reduce((acc, product) => acc + product.price * product.quantity, 0),
)
</script>

<template>
  <div class="w-full max-w-3xl mx-auto mt-6 flex flex-wrap lg:flex-nowrap">
    <!-- Product List -->
    <div class="w-full lg:w-2/3 lg:pr-6">
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden" data-v0-t="card">
        <div class="p-6 divide-y space-y-6">
          <div v-if="productStore.length === 0" class="text-center">Your cart is empty</div>
          <div v-for="product in productStore" :key="product.id" class="flex items-center space-x-4 pt-2">
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
                <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2" @click="handleIncrement(product)">
                  +
                </button>
              </div>
              <div>
                Subtotal: ${{ product.quantity * product.price }}
              </div>
            </div>
          </div>
        </div>
        <div class="items-center p-6 flex justify-end space-x-4">
          <router-link to="/shop" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">Continue Shopping</router-link>
        </div>
      </div>
    </div>

    <!-- Payment Info -->
    <div class="w-full lg:w-1/3 lg:pl-6 mt-6 lg:mt-0">
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden" data-v0-t="card">
        <div class="p-6">
          <h2 class="font-semibold text-lg mb-4">Payment Info</h2>

          <div class="mb-4">
            <label for="discount" class="block text-sm text-gray-500">Discount Code:</label>
            <input id="discount" class="mt-1 block w-full border rounded-md p-2 text-sm" type="text">
            <button class="mt-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-grey-500 hover:text-accent-foreground h-10 px-4 py-2">Apply</button>
          </div>
          <div class="mb-4">
            <div class="text-sm text-gray-500">Total:</div>
            <div>${{ totalPrice }}</div>
          </div>
        </div>
        <button class="w-full h-10 bg-accent text-accent-foreground font-semibold rounded-b-lg hover:bg-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background ">Checkout</button>
      </div>
    </div>
  </div>
</template>

<style>
</style>

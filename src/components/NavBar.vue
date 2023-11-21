<script setup lang="ts">

</script>

<template>
  <header class="w-full h-auto-center rounded-b-sm pt-2 bg-blue-600">
    <div class="flex justify-between items-center">
      <h1 class="text-white p-2">Logo</h1>
      <div class="flex">
        <router-link to="/">Go to Home</router-link>
        <a class="text-white p-2">Shop</a>
        <a class="text-white p-2">Account</a>
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </header>
</template>

<style>
</style>

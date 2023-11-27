<script setup lang="ts">
import type { Product } from '../../types';

const props = defineProps<{
  product: Product
}>()
console.log('Received props:', props)
</script>

<template>
  <pre>{{ props }}</pre>
</template>

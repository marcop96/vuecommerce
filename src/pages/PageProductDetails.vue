<script setup lang="ts">
const props = defineProps<{
  id: string
}>()
console.log('Received props:', props.id)
</script>

<template>
  <pre>{{ props }}</pre>
</template>

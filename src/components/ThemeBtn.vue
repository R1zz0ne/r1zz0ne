<template>
  <button @click="onClick">
    <slot/>
  </button>
</template>

<script setup lang="ts">
const {onClick} = defineProps<{ onClick: () => void }>();
</script>

<style scoped>

</style>
<template>
  <div class="contacts__item" :data-title="value">
    <component :is="componentName" color="var(--skin-color)"/>
    <div class="contacts__item-name">{{ name }}</div>
    <div class="contacts__item-value">{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
const {componentName, name, value} = defineProps<{ componentName: string, name: string, value: string }>();
</script>

<style scoped>

</style>
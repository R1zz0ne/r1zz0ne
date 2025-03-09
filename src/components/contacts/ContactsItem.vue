<template>
  <div class="contacts__item" :data-title="value">
    <component color="var(--skin-color)"/>
    <div class="contacts__item-name">{{ name }}</div>
    <div class="contacts__item-value">{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
import type {Component} from "vue";

const {component, name, value} = defineProps<{ component: Component, name: string, value: string }>();
</script>

<style scoped>

</style>
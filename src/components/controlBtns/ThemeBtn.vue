<template>
  <button @click="onClick">
    <SVGSun
        v-if="theme === 'dark'"
        color="var(--text-color-title)"/>
    <SVGMoon
        v-if="theme === 'light'"
        color="var(--text-color-title)"/>
  </button>
</template>

<script setup lang="ts">
import SVGSun from "../svg/SVGSun.vue";
import SVGMoon from "../svg/SVGMoon.vue";

const {onClick, theme} = defineProps<{ onClick: () => void, theme: string }>();
</script>

<style scoped>

</style>
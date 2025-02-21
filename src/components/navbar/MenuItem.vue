<template>
  <li class="menu__item">
    <RouterLink
        :to="path"
        class="menu__link"
        :class="{'menu__link--active': $route.path === path}"
    >{{ name }}
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
const {path, name} = defineProps<{ path: string, name: string }>();
</script>

<style scoped>

</style>
<template>
  <li class="menu__item"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false">
    <RouterLink
        :to="path"
        class="menu__link"
        :class="{'menu__link--active': $route.path === path}"
    >
      <component :is="componentName"
                 class="menu__icon"
                 :color="$route.path === path || isHover ? 'var(--skin-color)' : 'var(--text-color-title)'"/>
      <span>{{ name }}</span>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import {ref} from "vue";

const {path, name, componentName} = defineProps<{ path: string, name: string, componentName?: string }>();
const isHover = ref<boolean>(false);
</script>

<style scoped>

</style>
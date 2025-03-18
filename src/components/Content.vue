<template>
  <div class="content content__container" :class="{'content__container--visible': configStore.isVisibleNavbar}">
    <RouterView/>
    <ColorSwitcher/>
  </div>
</template>

<script setup lang="ts">
import {useConfigStore} from "../store/ConfigStore.ts";
import ColorSwitcher from "./ColorSwitcher.vue";

const configStore = useConfigStore();
</script>

<style scoped>
</style>
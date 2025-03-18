<template>
  <Navbar @click="configStore.closeVisibleColorSwitcher"/>
  <Content @click="configStore.closeVisibleColorSwitcher"/>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Content from "./components/Content.vue";
import {useConfigStore} from "./store/ConfigStore.ts";

const configStore = useConfigStore();
</script>

<style lang="scss">
@use 'styles/index';
</style>

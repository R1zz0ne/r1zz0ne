<template>
  <button @click="configStore.invertIsVisibleNavbar()">
    <SVGClose v-if="configStore.isVisibleNavbar" color="var(--skin-color)"/>
    <SVGMenu v-else color="var(--skin-color)"/>
  </button>
</template>

<script setup lang="ts">
import {useConfigStore} from "../../store/ConfigStore.ts";
import SVGMenu from "../svg/SVGMenu.vue";
import SVGClose from "../svg/SVGClose.vue";

const configStore = useConfigStore();
</script>

<style scoped>

</style>
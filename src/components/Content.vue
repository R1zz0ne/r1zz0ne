<template>
  <div class="content content__container" :class="{'content__container--visible': configStore.isVisibleNavbar}">
    <RouterView/>
    <ThemeBtn class="content__theme-btn" :onClick="isChangeTheme" :theme="configStore.theme"/>
  </div>
</template>

<script setup lang="ts">
import ThemeBtn from "./ThemeBtn.vue";
import {watchEffect} from "vue";
import {useConfigStore} from "../store/ConfigStore.ts";

const configStore = useConfigStore();

const isChangeTheme = () => {
  if (configStore.theme === 'light') {
    configStore.setTheme('dark');
  } else {
    configStore.setTheme('light');
  }
}

const appDiv = document.getElementById('app');
watchEffect(() => {
  if (appDiv) {
    if (configStore.theme === 'dark') {
      appDiv.setAttribute('data-theme', 'dark');
    } else {
      appDiv.removeAttribute('data-theme');
    }
  }
})

</script>

<style scoped>
</style>
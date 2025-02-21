<template>
  <div class="content content__container">
<!--    <div class="content__container">-->
      <RouterView/>
      <ThemeBtn class="content__theme-btn" :onClick="isChangeTheme">
        <SVGSun
            v-if="theme === 'dark'"
            background="var(--bg-color-navbar)"
            color="var(--text-color-title)"/>
        <SVGMoon
            v-if="theme === 'light'"
            background="var(--bg-color-navbar)"
            color="var(--text-color-title)"/>
      </ThemeBtn>
<!--    </div>-->
  </div>
</template>

<script setup lang="ts">
import ThemeBtn from "./ThemeBtn.vue";
import {ref, watchEffect} from "vue";
import SVGSun from "./svg/SVGSun.vue";
import SVGMoon from "./svg/SVGMoon.vue";

const theme = ref<'light' | 'dark'>('light');

const isChangeTheme = () => {
  if (theme.value === 'light') {
    theme.value = 'dark';
  } else {
    theme.value = 'light';
  }
}

const appDiv = document.getElementById('app');
watchEffect(() => {
  if (appDiv) {
    if (theme.value === 'dark') {
      appDiv.setAttribute('data-theme', 'dark');
    } else {
      appDiv.removeAttribute('data-theme');
    }
  }
})

</script>

<style scoped>
</style>
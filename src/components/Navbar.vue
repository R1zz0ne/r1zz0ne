<template>
  <nav class="navbar navbar__container" :class="{'navbar__container--visible': configStore.isVisibleNavbar}">
    <div class="navbar__logo">
      <RouterLink to="/">R1zz0ne</RouterLink>
    </div>
    <div class="navbar__menu-container">
      <ul class="menu">
        <MenuItem path="/" name="Главная"/>
        <MenuItem path="/about" name="Обо мне"/>
        <MenuItem path="/technologies" name="Технологии"/>
        <MenuItem path="/contacts" name="Контакты"/>
      </ul>
    </div>
    <div class="navbar__footer">
      <span>© 2025 R1zz0ne</span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import MenuItem from "./navbar/MenuItem.vue";
import {useConfigStore} from "../store/ConfigStore.ts";

const configStore = useConfigStore();
</script>

<style scoped>
</style>
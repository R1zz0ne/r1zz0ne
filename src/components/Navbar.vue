<template>
  <nav class="navbar navbar__container" :class="{'navbar__container--visible': configStore.isVisibleNavbar}">
    <div class="navbar__logo">
      <RouterLink to="/">R1zz0ne</RouterLink>
    </div>
    <div class="navbar__menu-container">
      <ul class="menu">
        <MenuItem path="/" name="Главная" componentName="SVGHome"/>
        <MenuItem path="/about" name="Обо мне" componentName="SVGUser"/>
        <MenuItem path="/technologies" name="Технологии" componentName="SVGBrain"/>
        <MenuItem path="/contacts" name="Контакты" componentName="SVGComments"/>
      </ul>
    </div>
    <div class="navbar__footer">
      <span>© 2025 R1zz0ne</span>
    </div>
    <VisibleNavbarBtn class="navbar__visible-btn" :class="{'open': configStore.isVisibleNavbar}"/>
  </nav>
</template>

<script setup lang="ts">
import MenuItem from "./navbar/MenuItem.vue";
import {useConfigStore} from "../store/ConfigStore.ts";
import VisibleNavbarBtn from "./controlBtns/VisibleNavbarBtn.vue";

const configStore = useConfigStore();
</script>

<style scoped>
</style>
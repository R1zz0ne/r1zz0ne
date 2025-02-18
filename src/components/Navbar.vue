<template>
  <nav class="navbar">
    <div class="navbar__container">
      <ul class="menu">
        <li class="menu__item">
          <RouterLink to="/" class="menu__link">Главная</RouterLink>
        </li>
        <li class="menu__item">
          <RouterLink to="/about" class="menu__link">Обо мне</RouterLink>
        </li>
        <li class="menu__item">
          <RouterLink to="/technologies" class="menu__link">Технологии</RouterLink>
        </li>
        <li class="menu__item">
          <RouterLink to="/contacts" class="menu__link">Контакты</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
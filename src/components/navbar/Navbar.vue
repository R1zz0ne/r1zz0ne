<template>
  <nav class="navbar">
    <div class="navbar__container">
      <ul class="menu">
        <li class="menu__item">
          <RouterLink to="/" class="menu__link">Обо мне</RouterLink>
        </li>
        <li class="menu__item">
          <RouterLink to="/stack" class="menu__link">Стек</RouterLink>
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

<style scoped lang="scss">
@import 'navbar';
</style>
<template>
  <section class="about">
    <div class="about__row">
      <div class="avatar">
        <img src="../../../assets/avatar.jpg" alt="Аватар" class="avatar__img">
      </div>
      <div class="about__text">
        <h2>Бердников Алексей Сергеевич</h2>
        <p>Привет, это PET-проект, в рамках которого я учусь работать с препроцессором scss,
          создам адаптивную верстку с использованием media запросов, а также практикуюсь в верстке с использованием БЭМ
          методологии.
          Дополнительно хочу сделать выбор цветовой схемы: светлая или темная
        </p>
      </div>
    </div>
    <div class="about__row">
      <div class="personal">
        <Personal__item label="День рождения" text="24 марта 1998 г."/>
        <Personal__item label="Возраст" text="26"/>
        <Personal__item label="Город" text="Уфа"/>
        <Personal__item label="Статус работы" text="В активном поиске"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Personal__item from "./personal__item/Personal__item.vue";
</script>

<style scoped lang="scss">
@import 'about';
</style>
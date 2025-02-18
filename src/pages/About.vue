<template>
  <section class="about">
    <div class="about__container">
      <div class="content__row">
        <h2 class="content__title">Обо мне</h2>
      </div>
      <div class="content__row">
        <div class="about__text">
          <h3 class="content__subtitle">Меня зовут Алексей Бердников, хочу стать Frontend-разработчиком</h3>
          <p class="content__text">Это PET-проект, в рамках которого я учусь работать с препроцессором scss,
            создам адаптивную верстку с использованием media запросов, а также практикуюсь в верстке с использованием
            БЭМ методологии. Дополнительно хочу сделать выбор цветовой схемы: светлая или темная. Далее этот проект
            перерастет в собственный сайт
          </p>
        </div>
      </div>
      <div class="content__row">
        <div class="personal">
          <AboutItem label="День рождения" text="24 марта 1998 г."/>
          <AboutItem label="Возраст" text="26"/>
          <AboutItem label="Город" text="Уфа"/>
          <AboutItem label="Статус работы" text="В активном поиске"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AboutItem from "../components/about/AboutItem.vue";
</script>

<style>
</style>
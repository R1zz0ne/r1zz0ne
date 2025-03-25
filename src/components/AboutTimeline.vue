<template>
  <div class="qualifications qualifications__container">
    <h3 class="content__subtitle">{{name}}</h3>
    <div class="content__row content__padding timeline">
      <div class="timeline__container">
        <div class="timeline__item" v-for="item in data">
          <div class="timeline__item--circle"/>
          <div class="timeline__item--date">{{ item.date }}</div>
          <div class="timeline__item--title">{{ item.title }}</div>
          <div class="timeline__item--text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {name, data} = defineProps<{ name: string, data: { date: string, title: string, text: string }[] }>();
</script>

<style scoped>
</style>
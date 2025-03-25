<template>
  <section class="about">
    <div class="about__container">
      <div class="content__row content__row--title">
        <h2 class="content__title">{{ aboutStore.pageName }}</h2>
      </div>
        <div class="content__row content__row--indent">
          <div class="about__text">
            <h3 class="content__subtitle">{{ aboutStore.title }}</h3>
            <p class="content__text">{{ aboutStore.text }} </p>
          </div>
        </div>
        <div class="content__row content__row--indent">
          <div class="personal">
            <AboutItem v-for="item in aboutStore.personalInfo" :label="item.nameField" :text="item.value"/>
          </div>
        </div>
        <div class="content__row content__row--indent content__row--no-gap content__row--wrap">
          <AboutTimeline name="Образование" :data="aboutStore.educationInfo"/>
          <AboutTimeline name="Опыт" :data="aboutStore.experienceInfo"/>
        </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AboutItem from "../components/about/AboutItem.vue";
import {useAboutStore} from "../store/AboutStore.ts";
import AboutTimeline from "../components/AboutTimeline.vue";

const aboutStore = useAboutStore();
</script>

<style>
</style>
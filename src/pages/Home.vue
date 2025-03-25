<template>
  <section class="home">
    <div class="home__container">
      <div class="home__info">
        <div class="content__row content__row--fd-column">
          <h3 class="home__title">
            {{ homeStore.title }}
            <span class="home__name">{{ homeStore.name }}</span>
          </h3>
          <h3 class="home__subtitle">Я
            <Typing :typingArray="homeStore.typing" class="home__typing"/>
          </h3>
        </div>
        <div class="content__row content__row--indent">
          <p class="content__text home__text">{{ homeStore.text }}</p>
        </div>
      </div>
      <div class="home__img">
        <img :src="avatarImg" alt="photo">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useHomeStore} from "../store/HomeStore.ts";
import avatarImg from "../assets/avatar.jpg"
import Typing from "../components/home/Typing.vue";

const homeStore = useHomeStore();
</script>

<style scoped>

</style>
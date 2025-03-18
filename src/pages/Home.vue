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
            <span class="home__typing">{{
                outText
              }}</span>
            <span class="home__cursor" :class="{'home__cursor--blink': cursorBlink}"/>
          </h3>
        </div>
        <div class="content__row content__row--indent">
          <p class="content__text home__text">{{ homeStore.text }}</p>
        </div>
      </div>
      <div class="home__img">
        <img :src="homeStore.photoPath" alt="photo">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useHomeStore} from "../store/HomeStore.ts";
import {onMounted, ref} from "vue";

const homeStore = useHomeStore();
const element = ref<number>(0);
const stringIndex = ref<number>(0);
const outText = ref<string>("");
const cursorBlink = ref<boolean>(false);

const test = [
  "хочу быть frontend разрабочиком",
  "знаком с React, Vue",
  "пишу на JavaScript/TypeScript",
];

const typeLine = () => {
  const addInterval = setInterval(() => {
    const resultAdd = addStringEl();
    if (resultAdd) {
      clearInterval(addInterval);
      cursorBlink.value = true;
      const delayTimeout = setTimeout(() => {
        const removeInterval = setInterval(() => {
          const resultRemove = removeStringEl();
          if (resultRemove) {
            cursorBlink.value = false;
            if (element.value === test.length) {
              element.value = 0;
            }
            clearInterval(removeInterval);
            clearTimeout(delayTimeout);
            typeLine();
          }
        }, 15)
      }, 2000)
    }
  }, 100)
}

const addStringEl = () => {
  outText.value += test[element.value][stringIndex.value];
  stringIndex.value++;
  if (stringIndex.value >= test[element.value].length) {
    stringIndex.value = 0;
    element.value++;
    return true;
  }
}

const removeStringEl = () => {
  outText.value = outText.value.slice(0, -1);
  if (outText.value.length === 0) {
    return true;
  }
}

onMounted(() => {
  typeLine();
})
</script>

<style scoped>

</style>
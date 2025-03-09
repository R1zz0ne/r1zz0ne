<template>
  <div class="technologies__item"
       @mouseenter="isHover = true"
       @mouseleave="isHover = false">
    <div class="technologies__item-inner">
      <div class="technologies__item-circle"
           :style="`background: conic-gradient(var(--skin-color) ${currentProgress}%, var(--border-color) 0%)`"
      >
        <div class="technologies__logo">
          <p>{{ name }}</p>
          <span :style="{background: isHover ? `${color}` : ''}">
            <component :is="componentName"/>
          </span>
        </div>
      </div>
      <div class="technologies__description"> {{ description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const isHover = ref<boolean>(false);

const {name, description, componentName, color} = defineProps<{
  componentName: string,
  name: string,
  description: string,
  color: string
}>();

const currentProgress = ref<number>(0);

const progress = () => {
  let interval = setInterval(() => {
    currentProgress.value += 1;
    if (currentProgress.value > 99) {
      clearInterval(interval);
      return;
    }
  }, 30)
}
progress()
</script>

<style scoped lang="scss">
</style>
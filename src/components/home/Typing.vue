<template>
  <span class="home__typing">
  {{ outText }}
  </span>
  <span class="home__cursor" :class="{'home__cursor--blink': cursorBlink}"/>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

const {typingArray} = defineProps<{ typingArray: string[] }>();
const outText = ref<string>("");
const stringIndex = ref<number>(0);
const element = ref<number>(0);
const cursorBlink = ref<boolean>(false);

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
            if (element.value === typingArray.length) {
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
  outText.value += typingArray[element.value][stringIndex.value];
  stringIndex.value++;
  if (stringIndex.value >= typingArray[element.value].length) {
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
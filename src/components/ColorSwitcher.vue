<template>
  <div class="content__color-switcher"
       :style="{right: configStore.isVisibleColorSwitcher ? '1.5rem' : `-${colorDivWidth}rem`,
       width: `${colorDivWidth}rem`}"
       @click.stop>
    <SettingsBtn
        class="content__skin-btn"
        :class="{'content__skin-btn--offset': configStore.isVisibleColorSwitcher}"
        @click.stop="configStore.invertVisibleColorSwitcher"/>
    <ThemeBtn
        class="content__theme-btn"
        :class="{'content__theme-btn--offset': configStore.isVisibleColorSwitcher}"
        :onClick="isChangeTheme"
        :theme="configStore.theme"/>
    <p>Цвет темы</p>
    <div class="colors" ref="colorsDiv">
      <div v-for="item in colors"
           class="colors__item"
           :style="{background: item.color}"
           :key="item.name"
           @click="changeColor(item.name)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ThemeBtn from "./controlBtns/ThemeBtn.vue";
import SettingsBtn from "./controlBtns/SettingsBtn.vue";
import {useConfigStore} from "../store/ConfigStore.ts";
import {onMounted, ref, watchEffect} from "vue";

const colorsDiv = ref<HTMLElement | null>(null);
const colorDivWidth = ref<number>(0);
const styleColor = ref<string>('');
const colors = [
  {
    name: 'red',
    color: 'var(--skin-red)'
  },
  {
    name: 'blue',
    color: 'var(--skin-blue)'
  },
  {
    name: 'green',
    color: 'var(--skin-green)'
  },
  {
    name: 'orange',
    color: 'var(--skin-orange)'
  }
];
const configStore = useConfigStore();
const appDiv = document.getElementById('app');

const isChangeTheme = () => {
  if (configStore.theme === 'light') {
    configStore.setTheme('dark');
  } else {
    configStore.setTheme('light');
  }
}

const changeColor = (colorName: string) => {
  configStore.setSkin(colorName);
}

onMounted(() => {
  if (colorsDiv.value) {
    const childCount = colorsDiv.value.children.length;
    colorDivWidth.value = 2.25 * childCount + 2;
    styleColor.value = `right: '-${colorDivWidth}rem', width: '${colorDivWidth}rem'`
  }
})

watchEffect(() => {
  if (appDiv) {
    if (configStore.theme === 'dark') {
      appDiv.setAttribute('data-theme', 'dark');
    } else {
      appDiv.removeAttribute('data-theme');
    }

    if (configStore.skin) {
      appDiv.setAttribute('data-skin', configStore.skin)
    }
  }
})
</script>

<style scoped>

</style>
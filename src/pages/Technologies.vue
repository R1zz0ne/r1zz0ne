<template>
  <section class="technologies">
    <div class="technologies__container">
      <div class="content__row">
        <h2 class="content__title">
          Технологии
        </h2>
      </div>
      <div class="content__row technologies__body">
        <TechnologiesItem
            v-for="item in dataTech"
            :name="item.name"
            :description="item.description"
            :componentName="item.icon"
            :color="item.color"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TechnologiesItem from "../components/technologies/TechnologiesItem.vue";
import {getColorMix, getGradient} from "../utils/utils.ts";

const dataTech = [
  {
    name: "Vue3",
    description: "Быстрые и отзывчивые пользовательские интерфейсы",
    icon: "SVGVue",
    color: getGradient(getColorMix("#35495E"), getColorMix("#41B883FF")),
  },
  {
    name: "VueRouter",
    description: "Гибкая и удобная маршрутизация приложений",
    icon: "SVGVue",
    color: getGradient(getColorMix("#35495E"), getColorMix("#41B883FF")),
  },
  {
    name: "VueX",
    description: "Централизованное, реактивное и предсказуемое управление состоянием",
    icon: "SVGVue",
    color: getGradient(getColorMix("#35495E"), getColorMix("#41B883FF")),
  },
  {
    name: "Pinia",
    description: "Простое и мощное управление состоянием",
    icon: "SVGPinia",
    color: getGradient(getColorMix("#6EDB7F"), getColorMix("#FFD552")),
  },
  {
    name: "TypeScript",
    description: "Надежная и масштабируемая типизация кода",
    icon: "SVGTypeScript",
    color: getColorMix("#007ACC"),
  },
  {
    name: "JavaScript",
    description: "Гибкий и универсальный язык программирования",
    icon: "SVGJavaScript",
    color: getColorMix("#F7DF1E"),
  },
  {
    name: "Vite",
    description: "Быстрая и современная сборка проектов",
    icon: "SVGVite",
    color: getGradient(getColorMix('#48C8FF'), getColorMix('#BD34FE'), 'to bottom right'),
  },
  {
    name: "Sass/Scss",
    description: "Мощные и удобные стили в проекте",
    icon: "SVGSass",
    color: getColorMix("#CD6799"),
  },
  {
    name: "Axios",
    description: "Простой и мощный HTTP-клиент",
    icon: "SVGAxios",
    color: getColorMix("#5A29E4"),
  },
  {
    name: "Socket.IO",
    description: "Взаимодействие в реальном времени",
    icon: "SVGSocketIO",
    color: getColorMix("#000000", 15),
  },
  {
    name: "Docker",
    description: "Универсальное развертывание на любой платформе",
    icon: "SVGDocker",
    color: getColorMix("#2396ED"),
  },
  {
    name: "React",
    description: "Гибкие и мощные пользовательские интерфейсы",
    icon: "SVGReact",
    color: getColorMix("#00D8FF"),
  },
  {
    name: "Redux",
    description: "Глобальное и неизменяемое управление состоянием",
    icon: "SVGRedux",
    color: getColorMix("#764ABC"),
  },
  {
    name: "HTML",
    description: "Структура и фундамент сайта",
    icon: "SVGHtml",
    color: getColorMix("#E44D26"),
  },
  {
    name: "CSS",
    description: "Стили и оформление сайта",
    icon: "SVGCss",
    color: getColorMix("#1172B8"),
  },
  {
    name: "NodeJS",
    description: "Серверный JavaScript для масштабируемых приложений",
    icon: "SVGNodeJS",
    color: getColorMix("#62B347"),
  },
  {
    name: "Express",
    description: "Быстрый и простой бэкенд на JavaScript",
    icon: "SVGExpress",
    color: getColorMix("#000000", 20),
  },
  {
    name: "PostgreSQL",
    description: "Мощная и надежная реляционная база данных",
    icon: "SVGPostgreSQL",
    color: getColorMix("#336791"),
  },
  {
    name: "Git",
    description: "Контроль и надежность разработки",
    icon: "SVGGit",
    color: getColorMix("#EE513B", 20),
  }
];
</script>

<style scoped lang="scss">

</style>
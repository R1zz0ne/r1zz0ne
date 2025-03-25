<template>
  <section class="technologies">
    <div class="technologies__container">
      <div class="content__row content__row--title">
        <h2 class="content__title">
          {{ technologiesStore.pageName }}
        </h2>
      </div>
      <div class="content__row technologies__body">
        <TechnologiesItem
            v-for="item in technologiesStore.technologies"
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
import {useTechnologiesStore} from "../store/TechnologiesStore.ts";

const technologiesStore = useTechnologiesStore();
</script>

<style scoped lang="scss">

</style>
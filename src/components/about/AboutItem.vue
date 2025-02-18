<template>
  <div class="personal__item">
    <p>{{ label }}:
      <span>{{ text }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
interface PersonalItem {
  label: string;
  text: string;
}

const {label, text} = defineProps<PersonalItem>();
</script>

<style scoped>
</style>
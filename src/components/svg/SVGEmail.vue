<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       height="48"
       width="48"
       viewBox="0 0 32 32"
       overflow="visible">
    <g>
      <g>
        <path d="M16,16.8l13.8-9.2C29.2,5.5,27.3,4,25,4H7C4.7,4,2.8,5.5,2.2,7.6L16,16.8z"
              :fill="color"/>
      </g>
      <g>
        <path
            d="M16.6,18.8C16.4,18.9,16.2,19,16,19s-0.4-0.1-0.6-0.2L2,9.9V23c0,2.8,2.2,5,5,5h18c2.8,0,5-2.2,5-5V9.9L16.6,18.8z"
            :fill="color"/>
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
const {color} = defineProps<{ color: string }>();
</script>

<style scoped>

</style>
<template>
  <svg :fill="color"
       width="24"
       height="24"
       viewBox="0 -1 34 34"
       xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier"><title>comments</title>
      <path
          d="M25.132 13.165c0-5.165-5.627-9.352-12.566-9.352s-12.566 4.187-12.566 9.352c0 3.104 2.032 5.854 5.16 7.555-0.009 0.027-2.492 4.545-2.492 4.545s7.582-2.892 7.603-2.904c0.744 0.103 1.511 0.155 2.295 0.155 6.939 0 12.566-4.187 12.566-9.351zM34.385 16.087c0-5.164-5.297-9.314-11.031-9.351 8.22 8.188-1.461 16.912-9.351 16.912 0 0 0.877 1.79 7.816 1.79 0.783 0 1.551-0.054 2.295-0.156 0.021 0.014 7.604 2.904 7.604 2.904s-2.484-4.517-2.492-4.544c3.127-1.701 5.159-4.452 5.159-7.555z"></path>
    </g>
  </svg>
</template>

<script setup lang="ts">
const {color} = defineProps<{ color: string }>();
</script>

<style scoped>

</style>
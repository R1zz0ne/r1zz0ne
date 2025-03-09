<template>
  <section class="contacts">
    <div class="contacts__container">
      <div class="content__row">
        <h2 class="content__title">Контакты</h2>
      </div>
      <div class="content__row">
        <h2 class="content__subtitle content__subtitle--center">У вас есть вопросы?</h2>
      </div>
      <div class="content__row contacts__body">
        <ContactsItem name="Телеграм" value="@R1zz0ne" :component="SVGTelegram"/>
        <ContactsItem name="Email" value="aleksei240398@gmail.com" :component="SVGEmail"/>
        <ContactsItem name="GitHub" value="R1zz0ne" :component="SVGGithub"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import ContactsItem from "../components/contacts/ContactsItem.vue";
import SVGEmail from "../components/svg/SVGEmail.vue";
import SVGTelegram from "../components/svg/SVGTelegram.vue";
import SVGGithub from "../components/svg/SVGGithub.vue";
</script>

<style scoped>
</style>
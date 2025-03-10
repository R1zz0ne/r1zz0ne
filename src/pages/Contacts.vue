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
        <ContactsItem name="Телеграм" value="@R1zz0ne" componentName="SVGTelegram"/>
        <ContactsItem name="Email" value="aleksei240398@gmail.com" componentName="SVGEmail"/>
        <ContactsItem name="GitHub" value="R1zz0ne" componentName="SVGGithub"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactsItem from "../components/contacts/ContactsItem.vue";
</script>

<style scoped>
</style>
<template>
  <section class="contacts">
    <div class="contacts__container">
      <div class="content__row content__row--title">
        <h2 class="content__title">{{ contactsStore.pageName }}</h2>
      </div>
      <div class="content__row content__row--indent">
        <h2 class="content__subtitle content__subtitle--center">{{ contactsStore.title }}</h2>
      </div>
      <div class="content__row contacts__body content__row--indent">
        <ContactsItem
            v-for="item in contactsStore.contacts"
            :name="item.name"
            :value="item.value"
            :componentName="item.svg"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactsItem from "../components/contacts/ContactsItem.vue";
import {useContactsStore} from "../store/ContactsStore.ts";

const contactsStore = useContactsStore();
</script>

<style scoped>
</style>
import {defineStore} from "pinia";

export const useContactsStore = defineStore("contactsStore", {
    state: () => ({
        pageName: "Контакты",
        title: "У вас есть вопросы?",
        contacts: [
            {svg: "SVGTelegram", name: "Телеграм", value: "@R1zz0ne"},
            {svg: "SVGEmail", name: "Email", value: "aleksei240398@gmail.com"},
            {svg: "SVGGithub", name: "GitHub", value: "R1zz0ne"}
        ]
    })
});
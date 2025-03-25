import {defineStore} from "pinia";

export const useConfigStore = defineStore("configStore", {
    state: () => ({
        theme: localStorage.getItem('theme') || 'light',
        isVisibleNavbar: false,
        isVisibleColorSwitcher: false,
        skin: localStorage.getItem('skin') || 'blue',
        menuItems: [
            {path: "/", name: "Главная", componentName: "SVGHome"},
            {path: "/about", name: "Обо мне", componentName: "SVGUser"},
            {path: "/technologies", name: "Технологии", componentName: "SVGBrain"},
            {path: "/contacts", name: "Контакты", componentName: "SVGComments"},
        ]
    }),
    getters: {},
    actions: {
        invertIsVisibleNavbar() {
            this.isVisibleNavbar = !this.isVisibleNavbar;
        },
        closeVisibleNavbar() {
            this.isVisibleNavbar = false;
        },
        setTheme(theme: string) {
            this.theme = theme;
            localStorage.setItem("theme", theme);
        },
        invertVisibleColorSwitcher() {
            this.isVisibleColorSwitcher = !this.isVisibleColorSwitcher;
        },
        closeVisibleColorSwitcher() {
            if (this.isVisibleColorSwitcher) {
                this.isVisibleColorSwitcher = false;
            }
        },
        setSkin(colorName: string) {
            this.skin = colorName;
            localStorage.setItem("skin", colorName);
        }
    }
})
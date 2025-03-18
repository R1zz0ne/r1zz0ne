import {defineStore} from "pinia";

export const useConfigStore = defineStore("configStore", {
    state: () => ({
        theme: localStorage.getItem('theme') || 'light',
        isVisibleNavbar: false,
        isVisibleColorSwitcher: false,
        skin: localStorage.getItem('skin') || 'blue',
    }),
    getters: {},
    actions: {
        invertIsVisibleNavbar() {
            this.isVisibleNavbar = !this.isVisibleNavbar;
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
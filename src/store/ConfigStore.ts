import {defineStore} from "pinia";

export const useConfigStore = defineStore("configStore", {
    state: () => ({
        theme: localStorage.getItem('theme') || 'light',
        isVisibleNavbar: false,
    }),
    getters: {},
    actions: {
        invertIsVisibleNavbar() {
            this.isVisibleNavbar = !this.isVisibleNavbar;
        },
        setTheme(theme: string) {
            this.theme = theme;
            localStorage.setItem("theme", theme);
        }
    }
})
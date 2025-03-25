import {defineStore} from "pinia";

export const useHomeStore = defineStore("homeStore", {
    state: () => ({
        pageName: "Главная",
        title: "Привет, меня зовут ",
        name: "Алексей Бердников",
        text: "Пишу функциональные web-приложения (Single Page Application). Стремлюсь к профессиональным знаниям во Frontend разработке",
        photoPath: "/src/assets/avatar.jpg",
        typing: [
            " ",
            "Frontend разрабочик",
            "Vue, React специалист",
            "JavaScript/TypeScript программист",
            "стремлюсь к чистому и структурированному коду"
        ]
    })
});
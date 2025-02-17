import {createMemoryHistory, createRouter} from "vue-router";
import About from "./components/main/about/About.vue";
import Stack from "./components/main/stack/Stack.vue";
import Contacts from "./components/main/contacts/Сontacts.vue"

const routes = [
    {path: '/', component: About},
    {path: '/stack', component: Stack},
    {path: '/contacts', component: Contacts}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router;
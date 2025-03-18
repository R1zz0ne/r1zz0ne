import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: '/', component: () => import("../pages/Home.vue")},
    {path: '/about', component: () => import("../pages/About.vue")},
    {path: '/technologies', component: () => import("../pages/Technologies.vue")},
    {path: '/contacts', component: () => import("../pages/Contacts.vue")},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
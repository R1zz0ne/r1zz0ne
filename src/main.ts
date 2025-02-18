import {createApp} from 'vue'
import './styles/index.scss'
import App from './App.vue'
import router from "./router/router.ts";

createApp(App)
    .use(router)
    .mount('#app')

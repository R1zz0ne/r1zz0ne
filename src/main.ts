import {createApp} from 'vue'
import './index.scss'
import App from './App.vue'
import router from "./router.ts";

createApp(App)
    .use(router)
    .mount('#app')

import {createPinia} from 'pinia';
import {createApp} from 'vue'
import './styles/index.scss'
import App from './App.vue'
import router from "./router/router.ts";
import globalComponents from "./utils/globalSVG.ts";

createApp(App)
    .use(globalComponents)
    .use(createPinia())
    .use(router)
    .mount('#app')

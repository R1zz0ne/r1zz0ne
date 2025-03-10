import {defineAsyncComponent} from "vue";
import type {App, Component} from 'vue';

export default {
    install(app: App) {
        const components: Record<string, () => Promise<Component>> = import.meta.glob('../components/svg/**/*.vue', {eager: false});

        Object.entries(components).forEach(([path, component]) => {
            const componentName = path
                .split('/')
                .pop()
                ?.replace(/\.\w+$/, '');

            if (componentName) {
                app.component(componentName, defineAsyncComponent(() => component()));
            }
        })
    }
}
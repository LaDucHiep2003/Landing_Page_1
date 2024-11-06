import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
    app.component('default', defineAsyncComponent(() => import("../layout/default.vue")));
    app.component('auth', defineAsyncComponent(() => import("../layout/auth.vue")));
}
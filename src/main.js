import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { registerGlobalComponents } from "./utils/import"
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

const app = createApp(App)
registerGlobalComponents(app)
app.component("v-icon", OhVueIcon);
app.use(router)
app.mount('#app')

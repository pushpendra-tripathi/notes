import { createApp } from "vue"
import App from "./App.vue"

import DashBoard from "./components/DashBoard";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store.js";
//axios api wrapper
import axios from "./api.js";


const routes = [
    { path: '', component: DashBoard },
]


const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

let app = createApp(App)
app.config.globalProperties.$axios = axios;

app.config.globalProperties.$filters = {
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
}

app.use(router)
app.use(store)
app.mount("#app")


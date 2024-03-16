import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import Vue from "vue";

Vue.use(PrimeVue);
createApp(App).use(router).mount("#app");

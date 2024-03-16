import { createRouter, createWebHistory } from "vue-router";
import Shark from "../components/SharkComponent.vue";
import HelloWorld from "../components/HelloWorld.vue";

const routes = [
  {
    path: "/shark",
    name: "SharkComponent",
    component: Shark,
  },
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

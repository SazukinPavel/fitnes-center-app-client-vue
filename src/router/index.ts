import { createRouter, createWebHashHistory } from "vue-router";
import Login from "@/views/Login.vue";

const routes = [{ path: "/login", component: Login }];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
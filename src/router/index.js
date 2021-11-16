import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "../views/MainPage";

const routes = [
  { path: "/", name: "MainPage", component: MainPage },
  // { path: '/flavors', component: Flavors }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;

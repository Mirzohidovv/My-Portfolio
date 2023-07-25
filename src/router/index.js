import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/skills",
      name: "Front-end",
      component: () => import("../views/SkillsView.vue"),
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: () => import("../views/PortfolioView.vue"),
    },
    {
      path: "/contacts",
      name: "Contact"
      ,
      component: () => import("../views/ContactsView.vue"),
    },
    {
      path: "/:catchAll(.*)* ",
      name: 'notFound',
      component: NotFound,

    }
  ],
});

export default router;

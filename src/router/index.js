import HomeView from "@/views/HomeView.vue";
import CreatePostView from "@/views/CreatePostView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/create-post",
      name: "create-post",
      component: CreatePostView,
    },
  ],
});

export default router;

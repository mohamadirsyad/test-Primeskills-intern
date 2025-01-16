import { createRouter, createWebHistory } from "vue-router";
import CommentsTable from "../pages/CommentsTable.vue";

const routes = [
  {
    path: "/",
    name: "CommentsTable",
    component: CommentsTable,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

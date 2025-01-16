import { createRouter, createWebHistory } from "vue-router";
import CommentsTable from "../pages/CommentsTable.vue"; // Pastikan path ini sesuai

const routes = [
  {
    path: "/",
    name: "CommentsTable",
    component: CommentsTable, // Komponen yang akan ditampilkan pada path ini
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; // Pastikan meng-export objek router

import { createRouter, createWebHistory } from "vue-router";

import TrangChu from "../page/TrangChu.vue";
import DangNhap from "../page/DangNhap.vue";
import DangKy from "../page/DangKy.vue";

const routes = [
    {
      path: "/",
      component: TrangChu,
      name: "Home",
    },
    {
        path: "/login",
        component: DangNhap,
        name: "login",
        meta:{
            layout : 'auth'
        }

    },
    {
        path: "/register",
        component: DangKy,
        name: "register",
        meta:{
            layout : 'auth'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    },
});
  
export default router;
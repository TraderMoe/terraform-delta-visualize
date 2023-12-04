// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        icon: "mdi mdi-home",
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/changes",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/changes",
        name: "Changes",
        icon: "mdi mdi-swap-horizontal",
        component: () => import("@/views/Changes.vue"),
      },
    ],
  },
  {
    path: "/properties",
    hideInDrawer: true,
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/properties",
        name: "Properties",
        icon: "mdi mdi-text-box-outline",
        component: () => import("@/views/Properties.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/homepage/index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import('@/views/icons/index.vue'),
    meta: {
      title: '图标管理',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/layouts/index.vue'),
      redirect: { name: 'home-index' },
      children: [
        {
          path: '/home',
          name: 'home-index',
          component: () => import('@/pages/home/index.vue'),
        },
        {
          path: '/test',
          name: 'test',
          component: () => import('@/pages/test/index.vue'),
        },
      ],
    },
    // 处理所有未匹配的路由
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router

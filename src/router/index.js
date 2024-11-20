import { createRouter, createWebHashHistory } from 'vue-router';
import GUIDE from './guide/guide.js';

const routes = [
    {
        path: '/',
        redirect: '/guide/modal'
    },
    {
        path: '/',
        component: () => import('@/components/layout/LayoutBasic.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/main/MainPage.vue')
            }
        ]
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('@/views/ErrorPage.vue')
    },
    {
        path: '/notFound',
        name: 'notFound',
        component: () => import('@/views/NotFound.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/notFound'
    },
    ...GUIDE
];

const router = createRouter({
    mode: 'history',
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;

export default [
    {
        path: '/guide',
        component: () => import('@/components/layout/LayoutGuide.vue'),
        children: [
            {
                path: '/guide/modal',
                name: 'modal',
                component: () => import('@/views/guide/GuideModal.vue')
            },
            {
                path: '/guide/combo',
                name: 'combo',
                component: () => import('@/views/guide/GuideCombo.vue')
            },
            {
                path: '/guide/accordion',
                name: 'accordion',
                component: () => import('@/views/guide/GuideAccordion.vue')
            },
            {
                path: '/guide/dropdown',
                name: 'dropdown',
                component: () => import('@/views/guide/GuideDropDown.vue')
            },
            {
                path: '/guide/tab',
                name: 'tab',
                component: () => import('@/views/guide/GuideTabs.vue')
            },
            {
                path: '/guide/tooltip',
                name: 'tooltip',
                component: () => import('@/views/guide/GuideTooltip.vue')
            },
            {
                path: '/guide/toast',
                name: 'toast',
                component: () => import('@/views/guide/GuideToast.vue')
            },
            {
                path: '/guide/swiper',
                name: 'swiper',
                component: () => import('@/views/guide/GuideSwiper.vue')
            },
            {
                path: '/guide/calendar',
                name: 'calendar',
                component: () => import('@/views/guide/GuideCalendar.vue')
            },
            {
                path: '/guide/datepicker',
                name: 'datepicker',
                component: () => import('@/views/guide/GuideDatepicker.vue')
            }
        ]
    },
    {
        path: '/worklist',
        name: 'worklist',
        component: () => import('@/views/guide/WorkList.vue')
    }
];

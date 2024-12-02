import { createRouter, createWebHashHistory } from 'vue-router';
import rootPage from '@/views/BoardList.vue';
import BoardList from '@/views/BoardList.vue';
import BoardDetail from '@/views/BoardDetail.vue';
import BoardCreate from '@/views/BoardCreate.vue';
import BoardEdit from '@/views/BoardEdit.vue';
import Calculator from '@/views/Calculator.vue';
import Calculator2 from '@/views/Calculator2.vue';

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'rootPage',
			component: rootPage,
		},
		{
			path: '/BoardList',
			name: 'BoardList',
			component: BoardList,
		},
		{
			path: '/BoardDetail/:id',
			name: 'BoardDetail',
			component: BoardDetail,
		},
		{
			path: '/edit/:id',
			name: 'BoardEdit',
			component: BoardEdit,
		},
		{
			path: '/BoardCreate',
			name: 'BoardCreate',
			component: BoardCreate,
		},
		{
			path: '/Calculator',
			name: 'Calculator',
			component: Calculator,
		},
		{
			path: '/Calculator2',
			name: 'Calculator2',
			component: Calculator2,
		},
	],
});

export default router;

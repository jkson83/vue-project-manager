import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('@/views/BoardList.vue');
const board = () => import('@/views/BoardList.vue');
const accodian = () => import('@/views/accodian.vue');
const Create = () => import('@/views/BoardCreate.vue');
const Detail = () => import('@/views/BoardDetail.vue');
const Edit = () => import('@/views/BoardEdit.vue');
const work = () => import('@/views/Calculator2.vue');
const work_Cal2 = () => import('@/views/Calculator2.vue');
const work_Cal = () => import('@/views/Calculator.vue');

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home, // 정적 가져오기 사용
	},
	{
		path: '/accodian',
		name: 'accodian',
		component: accodian,
	},
	{
		path: '/board',
		name: 'board',
		component: board,
		children: [
			{ path: 'BoardDetail', name: 'Detail', component: Detail },
			{ path: 'BoardCreate', name: 'Create', component: Create },
			{ path: 'BoardEdit', name: 'Edit', component: Edit },
		],
	},
	{
		path: '/work',
		name: 'work',
		component: work,
		children: [
			{ path: 'Calculator', name: 'work', component: work },
			{ path: 'Calculator2', name: 'work_Cal2', component: work_Cal2 },
			{ path: 'Calendal', name: 'work_Cal', component: work_Cal },
		],
	},
	// 동적 가져오기 사용
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

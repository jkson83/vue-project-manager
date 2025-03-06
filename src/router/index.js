import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('@/views/BoardList.vue');
const board = () => import('@/views/BoardList.vue');
const accodian = () => import('@/views/accodian.vue');
const create = () => import('@/views/BoardCreate.vue');
const detail = () => import('@/views/BoardDetail.vue');
const edit = () => import('@/views/BoardEdit.vue');
const work = () => import('@/views/Calculator.vue');
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
		// children: [
		// 	{
		// 		path: 'detail/:id', // 상대 경로로 수정
		// 		name: 'detail',
		// 		component: detail,
		// 		props: true,
		// 	},
		// 	{ path: 'BoardCreate', name: 'BoardCreate', component: create },
		// 	{
		// 		path: ':id',
		// 		name: 'edit',
		// 		component: edit,
		// 		props: true,
		// 	},
		// ],
	},
	{
		path: '/detail/:id',
		name: 'detail',
		component: detail,
	},
	{
		path: '/edit/:id',
		name: 'edit',
		component: edit,
	},
	{
		path: '/create',
		name: 'create',
		component: create,
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

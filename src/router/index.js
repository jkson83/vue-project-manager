import { createRouter, createWebHistory } from 'vue-router';

const Home = () => '@/views/BoardList.vue';
const BoardPage = () => '@/views/BoardList.vue';
const WorkPage = () => '@/views/Calculator.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home, // 정적 가져오기 사용
	},
	{
		path: '/views',
		name: 'BoardPage',
		componet: BoardPage,
		children: [
			{ path: 'BoardDetail', name: 'BoardDetail', component: BoardPage },
			{ path: 'BoardCreate', name: 'BoardCreate', component: BoardPage },
			{ path: 'BoardEdit', name: 'BoardDetail', component: boardstyle },
		],
	},
	{
		path: '/views',
		name: 'WorkPage',
		componet: WorkPage,
		children: [
			{ path: 'Calculator', name: 'Calculator', component: WorkPage },
			{ path: 'Calculator2', name: 'Calculator2', component: WorkPage },
			{ path: 'Calendal', name: 'Calendal', component: WorkPage },
		],
	},
	// 동적 가져오기 사용
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

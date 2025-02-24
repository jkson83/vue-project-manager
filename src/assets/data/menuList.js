const siteMenuList = {
	listData: [
		{
			title: '게시판',
			link_to: '/views/boardList',
			list: [
				{
					title: '일반게시판형',
					link_to: '/views/boardList',
					type: 'normal',
				},
				{
					title: '갤러리형',
					link_to: '/views/boardList',
					type: 'gallery',
				},
				{
					title: '아코디언',
					link_to: '/views/AccodianItem',
					type: 'accodian',
				},
			],
		},
		{
			title: '기타작업물',
			link_to: '/views/Calculator',
			list: [
				{
					title: '계산기',
					link_to: '/views/Calculator2',
				},
				{
					title: '달력',
					link_to: '/views/calendal',
				},
			],
		},
		{
			title: '메뉴',
			link_to: '',
			list: [
				{
					title: '소메뉴',
					link_to: '',
				},
				{
					title: '소메뉴',
					link_to: '',
				},
			],
		},
		{
			title: '메뉴',
			link_to: '',
			list: [
				{
					title: '소메뉴',
					link_to: '',
				},
				{
					title: '소메뉴',
					link_to: '',
				},
			],
		},
	],
};

export default siteMenuList;

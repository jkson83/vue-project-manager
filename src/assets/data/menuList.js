const siteMenuList = {
	listData: [
		{
			name: '게시판',
			link_to: 'board',
			sublist: [
				{
					name: '일반게시판형',
					link_to: 'board',
					type: 'normal',
				},
				{
					name: '갤러리형',
					link_to: 'board',
					type: 'gallery',
				},
				{
					name: '아코디언',
					link_to: 'accodian',
					type: 'accodian',
				},
			],
		},
		{
			name: '작업물',
			link_to: 'work',
			sublist: [
				{
					name: '계산기',
					link_to: 'work_Cal2',
				},
				{
					name: '달력',
					link_to: 'work_Cal',
				},
			],
		},
		{
			name: '메뉴',
			link_to: '',
			sublist: [
				{
					name: '소메뉴',
					link_to: '',
				},
				{
					name: '소메뉴',
					link_to: '',
				},
			],
		},
		{
			name: '메뉴',
			link_to: '',
			sublist: [
				{
					name: '소메뉴',
					link_to: '',
				},
				{
					name: '소메뉴',
					link_to: '',
				},
			],
		},
	],
};

export default siteMenuList;

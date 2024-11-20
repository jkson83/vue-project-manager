import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePostStore = defineStore('postStore', () => {
	const posts = ref([
		{
			id: 1,
			name: '김길동',
			title: '첫번째 글',
			date: '2024-10-01',
			content: '첫번째 글입니다.',
		},
		{
			id: 2,
			name: '홍길동',
			title: '두번째 글',
			date: '2024-10-02',
			content: '두번째 글입니다.',
		},
		{
			id: 3,
			name: '김철수',
			title: '세번째 글',
			date: '2024-10-03',
			content: '세번째 글입니다.',
		},
		{
			id: 4,
			name: '신용만',
			title: '네번째 글',
			date: '2024-10-04',
			content: '네번째 글입니다.',
		},
	]);

	//게시물을 새로 추가하는 함수`

	const addPost = newPost => {
		posts.value.push({ ...newPost, id: posts.value.length + 1 }); //새로운 게시물 추가
	};

	//게시물을 수정하는 함수
	const updatePost = updatePost => {
		const index = posts.value.findIndex(post => post.id === updatePost.id);
		if (index !== -1) {
			posts.value[index] = updatePost; // 게시물 데이터 수정
		}
	};

	return {
		posts,
		addPost,
		updatePost,
	};
});

<template>
	<div class="Detail-st">
		<div class="card p-3 mb-4">
			<h1>{{ title }}</h1>
			<p>{{ content }}</p>
		</div>
		<div class="b-box">
			<router-link to="/BoardList">
				<button type="button" class="btn btn-primary">목록으로</button>
			</router-link>
			<router-link :to="`/edit/${id} `">
				<button type="button" class="btn btn-primary">수정</button>
			</router-link>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { usePostStore } from '@/store'; //Pina 스토어에서 가져오기
import { useRoute } from 'vue-router';

const postStore = usePostStore(); //스토어 인스턴스 생성
const route = useRoute();
const post = ref({});

//데이타 정의
const id = ref(null);
const name = ref('');
const title = ref('');
const content = ref('');

//라우터에서 데이타 가져오기
onMounted(() => {
	const postId = route.params.id;
	const post = postStore.posts.find(p => p.id === Number(postId));
	if (post) {
		id.value = post.id;
		name.value = post.name;
		title.value = post.title;
		content.value = post.content;
	}
});
</script>

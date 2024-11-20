<template>
	<div class="container">
		<p>수정하기</p>
		<form @submit.prevent="submitForm">
			<div class="input-group mb-3">
				<label for="InputName" class="TagName"></label>
				<input
					v-model="name"
					type="text"
					class="form-control"
					aria-describedby="basic-addon1"
					id="InputName"
				/>
			</div>

			<div class="input-group mb-3">
				<label for="InputTitle" class="TagName"></label>
				<input
					v-model="title"
					type="text"
					id="InputTitle"
					class="form-control"
					aria-describedby="basic-addon2"
				/>
			</div>
			<div class="input-group">
				<label for="InputCon" class="TagName"></label>
				<textarea
					v-model="content"
					class="form-control"
					id="InputCon"
					aria-label="With textarea"
				></textarea>
			</div>
			<p class="mt-3 btn-tab">
				<button type="submit" class="btn btn-outline-primary btn-sm">
					수정
				</button>
			</p>
		</form>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePostStore } from '@/store'; //Pinia 스토어 가져오기
import { useRoute, useRouter } from 'vue-router';
import dayjs from 'dayjs';

const postStore = usePostStore(); //스토어 인스턴스생성
const route = useRoute();
const router = useRouter();

// 폼에서 사용할 게시물 데이터
const id = ref(null);
const name = ref('');
const title = ref('');
const content = ref('');
const today = dayjs().format('YYYY-MM-DD');
//console.log(now);

//초기 데이터 설정
onMounted(() => {
	const postId = route.params.id; //라우터에서 게시물 id 가져오기
	const post = postStore.posts.find(p => p.id === Number(postId));
	if (post) {
		id.value = post.id;
		name.value = post.name;
		title.value = post.title;
		content.value = post.content;
	}
});

//수정된 데이터를 저장하는 함수
const submitForm = () => {
	const updatePost = {
		id: id.value,
		name: name.value,
		title: title.value,
		content: content.value,
		date: today,
	};
	postStore.updatePost(updatePost); //pinia 스토에 업데이트된 데이터 전달
	router.push('/BoardList');
};
</script>

<template>
	<div class="container">
		<div class="input-group mb-3">
			<label for="InputName" class="TagName">이름</label>
			<input
				v-model="name"
				type="text"
				class="form-control"
				placeholder="이름을 입력하세요."
				aria-label="이름을 입력하세요."
				aria-describedby="basic-addon1"
				id="InputName"
			/>
		</div>

		<div class="input-group mb-3">
			<label for="InputTitle" class="TagName">제목</label>
			<input
				v-model="title"
				type="text"
				id="InputTitle"
				class="form-control"
				placeholder="제목을 입력하세요"
				aria-label="제목을 입력하세요"
				aria-describedby="basic-addon2"
			/>
		</div>
		<div class="input-group">
			<label for="InputCon" class="TagName">내용</label>
			<textarea
				v-model="content"
				class="form-control"
				id="InputCon"
				aria-label="With textarea"
			></textarea>
		</div>
		<p class="mt-3 btn-tab">
			<button class="btn btn-outline-primary btn-sm" @click="saveData">
				입력
			</button>
		</p>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { usePostStore } from '@/store'; //Pinia 스토어 가져오기
import router from '@/router';
import dayjs from 'dayjs';

const postStore = usePostStore(); //스토어 인스턴스생성
//const emit = defineEmits(['save']);
const name = ref('');
const title = ref('');
const content = ref('');
const today = dayjs().format('YYYY-MM-DD');
//console.log(now);

const saveData = () => {
	const newPost = {
		name: name.value,
		title: title.value,
		content: content.value,
		date: today,
	};
	postStore.addPost(newPost); //Pinia 스토어에 게시물 추가

	console.log('이름:', name.value);
	console.log('제목:', title.value);
	console.log('내용:', content.value);
	console.log('날짜:');

	//입력 필트 초기화
	name.value = '';
	title.value = '';
	content.value = '';

	router.push('/BoardList');
};

// 데이터를 저장하는 로직을 여기에 추가 (예: 서버 API 호출)
//
</script>

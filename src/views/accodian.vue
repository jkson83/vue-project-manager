<template>
	<h3>아코디언 형식</h3>
	<!-- 아코디언 예시 -->
	<acocodian></acocodian>
</template>

<script setup>
import { ref } from 'vue';
import { usePostStore } from '@/store'; //Pinia 스토어 가져오기
import ModalPage from '@/components/ModalPage.vue';
import Acocodian from '@/components/Acocodian.vue';

const postStore = usePostStore(); //스토어 인스턴스 가져오기
const posts = postStore.posts; //스토의 posts 가져오기
const isModalOpen = ref(false);
const title = ref(null);
const content = ref(null);

const openModal = (Mtitle, Mcontent) => {
	//console.log(title, content);
	isModalOpen.value = true;
	title.value = Mtitle;
	content.value = Mcontent;
};

// const handleData = data => {
// 	posts.value.push(data);
// 	console.log('값을 받았습니다.:', data);
// };
</script>

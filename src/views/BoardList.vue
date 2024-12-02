<template>
	<div>
		<h3>리스트형식</h3>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">번호</th>
					<th scope="col">이름</th>
					<th scope="col">제목</th>
					<th scope="col">날짜</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="post in posts" :key="post.id">
					<td>
						{{ post.id }}
					</td>
					<td>
						{{ post.name }}
					</td>
					<!-- <td @click="openModal(post.title, post.content)"> -->
					<td>
						<router-link :to="'/BoardDetail/' + post.id">{{
							post.title
						}}</router-link>
					</td>

					<td>
						{{ post.date }}
					</td>
				</tr>
			</tbody>
		</table>
		<ModalPage
			:isOpen="isModalOpen"
			@close="isModalOpen = false"
			:title="title"
			:content="content"
		>
			<h2>{{ title }}</h2>
			<p>{{ content }}</p>
			<button @click="isModalOpen = false">닫기</button>
		</ModalPage>
	</div>

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

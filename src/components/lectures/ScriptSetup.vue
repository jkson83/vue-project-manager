<template>
	<div class="container py-4">
		{{ msg }}
		<br />
		{{ message }}
		<input type="text" v-model="message" />
		<button @click="sayHello">클릭</button>
		<PostItem
			type="news"
			title="제목"
			contents="내용입니다."
			:is-like="true"
		></PostItem>
		<PostItem
			type="news"
			title="제목"
			contents="내용입니다."
			:is-like="true"
		></PostItem>
		<PostItem
			type="news"
			title="제목"
			contents="내용입니다."
			:is-like="true"
		></PostItem>

		<hr />
		<TemplateRefChild ref="child"></TemplateRefChild>
		<template v-if="child">{{ child.message }}</template>
		<hr />
		<MyButton class="parent-class"></MyButton>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefChild from '@/components/setup/TemplateRefChild.vue';
import MyButton from '@/components/setup/MyButton.vue';

const message = ref('');
const msg = 'Hello World';
const sayHello = () => {
	alert('Hello World');
};
const child = ref(null);
defineExpose({
	msg,
});

const response = await axios('https://jsonplaceholder.typicode.com/posts');
console.log('response:', response);
</script>

<style lang="scss" scoped></style>

<template>
	<div>
		<h2>보간법</h2>
		<!-- v-once : 한번만 사용할 인스턴트일때 -->
		<p v-once>문자열:{{ message }}</p>
		<p>문자열:{{ message }}</p>
		<button v-on:click="message = message + '!'">Click</button>
		<hr />
		<h2>HTML</h2>
		<p>{{ rawHtml }}</p>
		<p v-html="rawHtml"></p>
		<hr />
		<h2>속성 바인딩</h2>
		<div :title="dynamicTitle">마우스를 올려보세요</div>
		<input type="text" value="홍길동" :disabled="isInputDisabled" />
		<input v-bind="attrs" />
		<h2>javascript</h2>
		{{ message.split('').reverse().join('') }}<br />
		{{ isInputDisabled ? '예' : '아니오' }}
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const message = ref('안녕하세요');
		const rawHtml = ref('<strong>안녕하세요</strong>');
		const dynamicTitle = ref('안녕하세요33');
		const isInputDisabled = ref(true);
		const attrs = ref({
			type: 'password',
			value: '12345678',
			disabled: false,
		});
		return {
			message,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
			attrs,
		};
	},
};
</script>

<style lang="scss" scoped></style>

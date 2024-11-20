<template>
	<div class="buttons_v3">
		<button
			v-for="button in buttons"
			:key="button"
			@click="handleClick(button)"
		>
			{{ button }}
		</button>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const buttons = ref([
	'7',
	'8',
	'9',
	'/',
	'4',
	'5',
	'6',
	'*',
	'1',
	'2',
	'3',
	'-',
	'0',
	'C',
	'=',
	'+',
]);

const emit = defineEmits(['input']); //emit 하위컴포넌트 함수를 정의한다.
const handleClick = value => {
	emit('input', value); //<-상위 컴포넌트로 보낼 함수에 변수 넣기
};
</script>

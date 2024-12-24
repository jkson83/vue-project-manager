<template>
	<div class="header">
		<TheNav @viewDepth="emitdata"></TheNav>
		<nav v-if="viewType === 'B'">
			<RouterLink to="/BoardList" class="category">리스트</RouterLink>
			<RouterLink to="/BoardCreate" class="category">작성하기</RouterLink>
		</nav>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import TheNav from './TheNav.vue';

const viewType = ref(''); // 초기 값을 불리언 false로 설정

const emitdata = data => {
	console.log('data:', data);
	viewType.value = data;
};

// const emitdata = data => {
// 	viewYn.value = data === true;
// 	console.log('data:', viewYn.value);
// };
// data가 'true'일 때 viewYn.value는 true, 그렇지 않으면 false
</script>

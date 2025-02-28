<template>
	<TopNavi />
	<div class="container">
		<router-view />
	</div>
	<!-- 컴포넌트 태그를 꼭 닫아주세요 -->
</template>

<script>
import TopNavi from '@/components/TopNavi.vue';

export default {
	components: { TopNavi }, // components에 등록 필요
};
</script>

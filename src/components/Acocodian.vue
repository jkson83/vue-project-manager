<template>
	<div class="accordion">
		<AccordionItem
			v-for="(item, index) in items"
			:key="index"
			:title="item.title"
			:is-open="openIndex === index"
			@toggle="openIndex = openIndex === index ? -1 : index"
		>
			<p class="viewCont">- {{ item.content }}</p>
		</AccordionItem>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import AccordionItem from '@/components/AccodianItem.vue';

const items = ref([
	{ title: '첫번째 제목', content: '첫번째 내용입니다.' },
	{ title: '두번째 제목', content: '두번째 내용입니다.' },
	{ title: '세번째 제목', content: '세번째 내용입니다.' },
]);

const openIndex = ref(-1); // 열려 있는 아코디언 항목의 인덱스를 관리
</script>

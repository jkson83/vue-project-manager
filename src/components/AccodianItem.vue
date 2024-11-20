<template>
	<div class="accodian-item">
		<button @click="$emit('toggle')" class="accordion-header">
			{{ title }}
		</button>
		<div v-if="isOpen" class="accordion-content">
			<slot></slot>
			<!-- 내용은 부모 컴포넌트에서 정의 -->
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	title: String,
	isOpen: Boolean,
});
</script>

<style lang="scss" scoped></style>

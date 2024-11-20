<template>
	<div>
		<p>{{ counter }}</p>
		<p>{{ messeage }}</p>
		<p>
			<button @click="increment">click!</button>
		</p>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const counter = ref(0);
		const messeage = ref('Hollo Vue3');
		const increment = () => {
			counter.value++;
		};
		return {
			counter,
			messeage,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>

<template>
	<div>
		<button v-on:click="increment">Counter:{{ Counter }}</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			Counter: 0,
		};
	},
	methods: {
		increment() {
			this.Counter++;
		},
	},
	mounted() {
		console.log('컴포넌트가 마운트 되었습니다.');
	},
};
</script>

<style lang="scss" scoped></style>

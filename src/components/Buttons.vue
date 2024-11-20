<template>
	<div class="buttons">
		<button
			v-for="button in buttons"
			:key="button"
			@click="handleClick(button)"
		>
			{{ button }}
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			buttons: [
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
			],
		};
	},
	methods: {
		handleClick(value) {
			this.$emit('input', value);
			console.log(value);
		},
	},
};
</script>

<style scoped>
.buttons {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;
}
button {
	font-size: 1.5em;
	padding: 20px;
}
</style>

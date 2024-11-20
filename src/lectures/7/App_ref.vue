<template>
	<div>
		<p>{{ message }}</p>
		<button v-on:click="addmessage">add click</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		let message = ref('Hello Vue');

		const addmessage = () => {
			message.value = message.value + '!';
		};
		console.log(message);
		console.log('message:', message.value);
		console.log('message:', typeof message.value);
		return {
			message,
			addmessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>

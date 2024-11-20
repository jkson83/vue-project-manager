<template>
	<div>{{ message }}</div>
	<div>{{ reverseMessage }}</div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
	setup() {
		const message = ref('Hollo Vue3');
		const reverseMessage = ref('');
		const reverseFunction = newValue => {
			console.log('즉시실행함!!');
			reverseMessage.value = newValue.split('').reverse().join('');
		};
		watch(message, reverseFunction);
		reverseFunction(message.value);
		return { message, reverseMessage };
	},
};
</script>

<style lang="scss" scoped></style>

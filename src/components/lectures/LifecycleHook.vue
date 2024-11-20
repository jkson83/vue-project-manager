<template>
	<div class="container py-4">
		<input ref="inputRef" type="text" value="hello World!" />
		<hr />
		<button @click="visibie = !visibie">Toggle Child</button>
		<lifecycle-child v-if="visibie"></lifecycle-child>
		<p id="message">{{ message }}</p>
	</div>
</template>

<script>
import { ref } from 'vue';
import LifecycleChild from '@/components/LifecycleChild.vue';

export default {
	components: {
		LifecycleChild,
	},
	setup() {
		// console.log('setup');
		const inputRef = ref(null);
		const message = ref('');
		const visibie = ref(false);
		// onBeforeMount(() => {
		// 	console.log('onBeforeMount', inputRef.value);
		// });
		// onMounted(() => {
		// 	console.log('onMounted', inputRef.value);
		// });
		// onBeforeUpdate(() => {
		// 	console.log('onBeforeUpdate', message.value);
		// 	console.log(
		// 		'DOM Contents:',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });
		// onUpdated(() => {
		// 	console.log('onUpdated', message.value);
		// 	console.log(
		// 		'DOM Contents:',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });
		return { inputRef, message, visibie };
	},
	// beforeCreate() {
	// 	console.log('beforeCreate');
	// },
	// created() {
	// 	console.log('created');
	// },
};
</script>

<style lang="scss" scoped></style>

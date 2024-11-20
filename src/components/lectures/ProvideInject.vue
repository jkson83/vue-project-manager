<template>
	<div class="container py-4">
		<dov class="card">
			<div class="card-header">ProvideInject component</div>
			<div class="card-body">
				<button @click="count++">click</button>
				<p>{{ appMessage }}</p>
				<Child></Child>
			</div>
		</dov>
	</div>
</template>

<script>
import { inject, provide, readonly, ref } from 'vue';
import Child from './Child.vue';
export default {
	components: {
		Child,
	},
	setup() {
		const staticMessage = 'static message';
		const message = ref('message');
		const updateMessage = appendMessage => {
			message.value = message.value + appendMessage;
		};
		const count = ref(10);
		// provide('static-message', staticMessage);
		provide('message', { message: readonly(message), updateMessage });
		provide('count', count);

		const appMessage = inject('app-message');
		return { count, appMessage };
	},
};
</script>

<style lang="scss" scoped></style>

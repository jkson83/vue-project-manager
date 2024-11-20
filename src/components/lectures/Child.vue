<template>
	<div class="card">
		<div class="card-header">ChildComponent</div>
		<div class="card-body">
			<p>{{ appMessage }}</p>
		</div>
		<DeepChild></DeepChild>
	</div>
</template>

<script>
import { inject } from 'vue';
import DeepChild from './DeepChild.vue';
export default {
	components: {
		DeepChild,
	},
	setup() {
		const appMessage = inject('app-message');
		return { appMessage };
	},
};
</script>

<style lang="scss" scoped></style>

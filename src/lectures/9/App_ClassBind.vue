<template>
	<div>
		<div
			class="text"
			:class="[isActive ? 'active-class' : 'class', ErrorClass, classObject]"
		>
			텍스트입니다.
		</div>
		<button v-on:click="toggle">toggle</button>
		<BUtton v-on:click="hasError = !hasError">toggleError</BUtton>
	</div>
</template>

<script>
import { computed, ErrorCodes, reactive, ref } from 'vue';
export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);
		// const classObject = reactive({
		// 	active: true,
		// 	'text-danger': true,
		// });

		const classObject = computed(() => {
			return {
				active: true && true,
				'text-danger': true && true,
				'text-blue': true,
			};
		});

		const toggle = () => {
			isActive.value = !isActive.value;
		};

		return {
			isActive,
			toggle,
			hasError,
			classObject,
		};
	},
};
</script>

<style scoped>
.active {
	font-weight: 900;
}
.text-danger {
	color: red;
}
</style>

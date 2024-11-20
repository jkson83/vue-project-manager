<template>
	<div class="container py-4">
		<input ref="input" type="text" />
		<p>{{ input }}</p>
		<p v-if="input">
			{{ input.value }}, {{ $refs.input.value }},
			{{ $refs.input === input }}
		</p>
		<hr />
		<!-- <ul>
			<li v-for="fruit in fruits" ref="itemRefs" :key="fruit">{{ fruit }}</li>
			<li
				v-for="fruit in fruits"
				:key="fruit"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul> -->
		<hr />
		<TemplateRefChild ref="child"></TemplateRefChild>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import TemplateRefChild from './TemplateRefChild.vue';
export default {
	components: {
		TemplateRefChild,
	},
	setup() {
		const input = ref(null);
		console.log('setup:', input.value);
		onMounted(() => {
			input.value.value = 'Hello World';
			console.log('onMounted:', input.value);

			// itemRefs.value.forEach(item => console.log('item:', item.textContent));
			itemRefs.value.forEach(item => console.log('item:', item));
			console.log('child.message', child.value.message);
			child.value.sayhello();
		});

		const fruits = ref(['사과', '딸기', '포토']);
		const itemRefs = ref([]);

		const child = ref(null);

		return { input, fruits, itemRefs, child };
	},
};
</script>

<style lang="scss" scoped></style>

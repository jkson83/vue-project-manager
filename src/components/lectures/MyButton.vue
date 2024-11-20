<template>
	<div class="p-3 bg-danger">
		<button class="btn btn-primary" type="button" @click="sayHello">
			MyButton
		</button>
		<!-- {{ $attrs }} -->
	</div>
</template>

<script>
export default {
	emits: ['click'],
	setup(props, { emit }) {
		const sayHello = () => {
			emit('click');
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>

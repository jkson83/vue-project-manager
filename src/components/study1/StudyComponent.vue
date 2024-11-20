<template>
	<div>
		<div>입력값 : {{ messageGetter }}</div>
		<input type="text" v-model="message" />
	</div>
</template>

<script>
export default {
	name: 'CommonButton',
	props: {
		name: String,
	},
	data() {
		return {
			message: '',
		};
	},
	computed: {
		messageGetter() {
			return this.message.split('').reverse().join('');
		},
	},
	methods: {
		onclick() {
			console.log('버튼클릭:', this.message);
		},
	},
	watch: {
		message(newValue, oldValue) {
			console.log('newValue:', newValue);
			console.log('oldValue:', oldValue);
		},
	},
};
</script>

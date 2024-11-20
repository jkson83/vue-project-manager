<template>
	<div>
		Home Component
		<CommonButton name="Home" @setInput="setInput" />
		자식에게 받은 데이터: {{ value }}
	</div>
</template>

<script>
import CommonButton from '@/components/study1/Button.vue';

export default {
	name: 'HomeComponent',
	components: {
		CommonButton,
	},
	data() {
		return {
			value: '',
		};
	},
	methods: {
		setInput(value) {
			this.value = value;
			console.log('자식 컴포넌트에게 값을 받았어요. :', value);
		},
	},
};
</script>

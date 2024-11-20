<template>
	<div>
		About Component<br />
		<CommonButton name="About" @setInput="setInput" />
		자식한테 받은 데이터: {{ value }}
	</div>
</template>

<script>
import CommonButton from '@/components/Buttons.vue';

export default {
	name: 'AboutComponent',
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
			console.log('자식 컴포넌트에게 값을 받았어요:', value);
		},
	},
};
</script>

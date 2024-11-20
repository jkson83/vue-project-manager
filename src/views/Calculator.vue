<template>
	<div class="calculator">
		<Display :value="currentValue" />
		<Buttons @input="handleInput" />
	</div>
</template>

<script>
import Display from '@/components/Display.vue';
import Buttons from '@/components/Buttons.vue';

export default {
	components: {
		Display,
		Buttons,
	},
	data() {
		return {
			currentValue: '0', // 디스플레이에 표시될 값
			operator: null,
			operand: null,
		};
	},
	methods: {
		handleInput(value) {
			if (!isNaN(value)) {
				// 숫자 입력
				//console.log('1');
				this.currentValue === '0'
					? (this.currentValue = value)
					: (this.currentValue += value);
			} else if (value === 'C') {
				// 초기화
				this.currentValue = '0';
				this.operator = null;
				this.operand = null;
			} else if (value === '=') {
				// 계산
				//console.log('2');
				if (this.operator && this.operand !== null) {
					this.calculate();
				}
			} else {
				//console.log('3');
				// 연산자 입력
				this.operator = value;
				this.operand = parseFloat(this.currentValue);
				this.currentValue = '0';
			}
		},
		calculate() {
			const current = parseFloat(this.currentValue);
			switch (this.operator) {
				case '+':
					this.currentValue = this.operand + current;
					break;
				case '-':
					this.currentValue = this.operand - current;
					break;
				case '*':
					this.currentValue = this.operand * current;
					break;
				case '/':
					this.currentValue = this.operand / current;
					break;
			}
			this.currentValue = String(this.currentValue);
			this.operator = null;
			this.operand = null;
		},
	},
};
</script>

<style scoped>
.calculator {
	width: 300px;
	margin: auto;
	text-align: center;
}
</style>

<template>
	<div class="cal_box">
		<display-2 :value="currentValue" :memory="memoryValue"></display-2>
		<buttons2 @input="handleInput"></buttons2>
	</div>
</template>

<script setup>
import Display2 from '@/components/Display2.vue';
import Buttons2 from '@/components/Buttons2.vue';
import { ref } from 'vue';

const currentValue = ref('0');
const operator = ref(null);
const operand = ref(null);
const memoryValue = ref('');

//입력 핸들러
const handleInput = value => {
	if (!isNaN(value)) {
		//숫자입력
		currentValue.value === '0'
			? (currentValue.value = value)
			: (currentValue.value += value);
		memoryValue.value += value;
	} else if (value === 'C') {
		//초기화
		currentValue.value = '0';
		operator.value = null;
		operand.value = null;
		memoryValue.value = '';
	} else if (value === '=') {
		memoryValue.value += value;
		//계산
		if (operator.value && operand.value !== null) {
			calculate();
		}
	} else {
		operator.value = value;
		operand.value = parseFloat(currentValue.value);
		currentValue.value = '0';
		memoryValue.value += operator.value;
	}
};

const calculate = () => {
	const current = parseFloat(currentValue.value);
	switch (operator.value) {
		case '+':
			currentValue.value = operand.value + current;
			break;
		case '-':
			currentValue.value = operand.value - current;
			break;
		case '*':
			currentValue.value = operand.value * current;
			break;
		case '/':
			currentValue.value = operand.value / current;
			break;
	}

	currentValue.value = String(currentValue.value);
	operator.value = null;
	operand.value = null;
	memoryValue.value += currentValue.value;
};
</script>

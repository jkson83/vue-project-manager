<template>
	<div v-if="isOpen" class="modal-overlay" @click="closeModal">
		<div class="modal-content" @click.stop>
			<button class="close-button" @click="closeModal">X</button>
			<slot></slot>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	isOpen: Boolean, //모달 열림/닫힘 상태를 제어하는 props
	title: String,
	conetnt: String,
});

//console.log(props);

const emit = defineEmits('[close]'); //부모 컴포넌트로 모달 달기 이벤트 전달

const closeModal = () => {
	emit('close'); //모달을 닫는 이벤트 emit
};
</script>

<style scoped>
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal-content {
	background: white;
	padding: 20px;
	border-radius: 10px;
	position: relative;
}

.close-button {
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	border: none;
	font-size: 16px;
	cursor: pointer;
}
</style>

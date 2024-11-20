<template>
	<div class="card">
		<div v-if="$slots.header" class="card-header">
			<slot name="header" header-message="헤더 메세지">#header</slot>
		</div>
		<div v-if="$slots.default" class="card-body">
			<slot :child-message="childMessage" hellomessage="안녕하세요">#body</slot>
		</div>
		<div v-if="hasFooter" class="card-footer text-body-secondary">
			<slot name="footer" footer-message="푸터메세지">#footer</slot>
		</div>
	</div>
</template>

<script>
import { computed, ref } from 'vue';
export default {
	setup(props, { slots }) {
		const childMessage = ref('자식컴포넌트 메세지');
		const hasFooter = computed(() => !!slots.footer);
		return { childMessage, hasFooter };
	},
};
</script>

<style lang="scss" scoped></style>

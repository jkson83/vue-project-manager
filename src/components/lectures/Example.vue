<template>
	<main>
		<div class="container py-4">
			<MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>
			<LabelInput label="이름"></LabelInput>
			<hr />
			<FancyButton>Click!! <sapn style="color: red">@@@</sapn></FancyButton>
			<FancyButton>
				<template v-slot="{ fancyMessage }">{{ fancyMessage }} </template>
			</FancyButton>
			<hr />
			<AppCard>
				<!-- <template #[slotArgs]>제목입니다.</template> -->
				<!-- <template #default>내용입니다.</template> -->
				<!-- 암시적으로 Default 슬롯입니다.
				<template #footer>푸터입니다.</template> -->
				<template #header="{ headerMessage }">
					{{ headerMessage }}
				</template>
				<template #default="{ childMessage, hellomessage }">
					디폴트입니다.<br />
					{{ childMessage }}<br />
					{{ hellomessage }}
				</template>
				<template #footer="{ footerMessage }">
					{{ footerMessage }}
				</template>
			</AppCard>
			<hr />
			<AppCard>게시글입니다.</AppCard>
		</div>
	</main>
</template>

<script>
import { ref } from 'vue';
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from '@/components/AppCard.vue';

export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			alert('안녕하세요!');
		};
		const slotArgs = ref('header');
		const message = ref('안녕하세요');
		return { sayHello, slotArgs, message };
	},
};
</script>

<style lang="scss" scoped></style>

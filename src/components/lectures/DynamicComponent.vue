<template>
	<div class="container py-4">
		<button
			class="btn btn-primary me-2"
			@click="changeCurrentCompt(DynamicApple)"
		>
			사과
		</button>
		<button class="btn btn-danger" @click="changeCurrentCompt(DynamicBanana)">
			바나나
		</button>
		<hr />
		<component :is="currentComp"></component>
		<p>{{ obj1 }}</p>
		<p>{{ obj2 }}</p>
	</div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
import DynamicApple from './DynamicApple.vue';
import DynamicBanana from './DynamicBanana.vue';

const currentComp = shallowRef(DynamicApple);

const obj1 = ref({ name: '홍길동' });
const obj2 = shallowRef({ name: '김길동' });

const changeCurrentCompt = comp => (currentComp.value = comp);
</script>

<style lang="scss" scoped></style>

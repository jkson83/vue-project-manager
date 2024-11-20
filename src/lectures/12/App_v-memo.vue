<template>
	<div v-memo="[subscribers]">
		<p>subscribers: {{ subscribers }}</p>
		<p>views: {{ views }}</p>
		<p>likes: {{ likes }}</p>
	</div>
	<button v-on:click="subscribers++">Subs++</button>
	<button @click="views++">Views++</button>
	<button @click="likes++">Views++</button>
	<div>
		<p>subscribers: {{ subscribers }}</p>
		<p>views: {{ views }}</p>
		<p>likes: {{ likes }}</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const subscribers = ref(4000);
		const views = ref(4000);
		const likes = ref(20);
		return { subscribers, views, likes };
	},
};
</script>

<style lang="scss" scoped></style>

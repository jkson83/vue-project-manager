<template>
	<div class="card">
		<div class="card-body">
			<!-- type: news, notice -->
			<span class="badge text-bg-secondary">{{ typeName }}</span>
			<h5 class="card-title mt-2">{{ title }}</h5>
			<p class="card-text">{{ contents }}</p>
			<a href="#" class="btn" :class="liLikeClass" @click="toggleLike"
				>좋아요</a
			>
		</div>
	</div>
</template>

<script>
console.log('Normal Script Setup');
</script>

<script setup>
import { computed } from 'vue';
console.log('Script Setup');

const props = defineProps({
	type: {
		type: String,
		default: 'news',
		validator: value => {
			return ['news', 'notice'].includes(value);
		},
	},
	title: {
		type: String,
		Required: true,
	},
	contents: {
		type: String,
		// Required: true,
	},
	isLike: {
		type: Boolean,
		default: false,
	},
	obj: {
		type: Object,
		default: () => {
			return {};
		},
	},
});

const emit = defineEmits(['toggleLike']);
const liLikeClass = computed(() =>
	props.isLike ? 'btn btn-danger' : ' btn-outline-danger',
);
const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항 '));
const toggleLike = () => {
	// props.isLike = !props.isLike;
	emit('toggleLike');
};
</script>

<style>
.red {
	color: v-bind(color) !important;
}
</style>

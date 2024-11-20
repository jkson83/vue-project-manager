<template>
	<div class="display_v3">
		<p class="memory-line">{{ memory }}</p>
		<p>{{ value }}</p>
	</div>
</template>

<script setup>
const props = defineProps(['value', 'memory']);
</script>

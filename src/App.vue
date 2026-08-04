<template>
	<div class="wrap">
		<Header></Header>
		<BOrchestrator />
		<RouterView />
	</div>
</template>
<script setup>
import { BOrchestrator } from 'bootstrap-vue-next';
import Header from './components/Header.vue';
</script>

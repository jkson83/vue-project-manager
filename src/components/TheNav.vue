<template>
	<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
		<div class="container-fluid">
			<!-- <RouterLink to="/BoardList" class="category" @click="toggleView('B')"
				>Home</RouterLink
			> -->
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto">
					<li class="nav-item">
						<RouterLink
							to="/BoardList"
							class="category"
							@click="toggleView('B')"
							>Board</RouterLink
						>
					</li>
					<li class="nav-item">
						<RouterLink
							to="/Calculator"
							class="category"
							@click="toggleView('e')"
							>계산기(Vue2)</RouterLink
						>
					</li>
					<li class="nav-item">
						<RouterLink
							to="/Calculator2"
							class="category"
							@click="toggleView('e')"
							>계산기(Vue3)</RouterLink
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script setup>
import { RouterLink } from 'vue-router';
const emit = defineEmits(['viewDepth']);

const toggleView = obj => {
	emit('viewDepth', obj);
};
</script>

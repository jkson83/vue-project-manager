<template>
	<nav>
		<!-- <RouterLink to="/BoardList" class="category" @click="toggleView('B')"
			>Home</RouterLink
		> -->
		<button
			class="navbar-toggler"
			type="button"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span></span>
		</button>
		<div>
			<ul>
				<li>
					<RouterLink to="/BoardList" class="category" @click="toggleView('B')"
						>Board</RouterLink
					>
				</li>
				<li>
					<RouterLink to="/Calculator" class="category" @click="toggleView('e')"
						>계산기(Vue2)</RouterLink
					>
				</li>
				<li>
					<RouterLink
						to="/Calculator2"
						class="category"
						@click="toggleView('e')"
						>계산기(Vue3)</RouterLink
					>
				</li>
			</ul>
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

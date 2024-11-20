<template>
	<div class="about">
		<!-- <h1>This is an about page</h1>
    <br /> -->
		<AboutComponent />
	</div>
</template>

<script>
import AboutComponent from '@/components/study1/AboutComponent.vue';

export default {
	name: 'AboutView',
	components: {
		AboutComponent,
	},
};
</script>

<style>
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}
</style>

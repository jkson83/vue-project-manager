<template>
	<!-- <main>
    <TheWelcome />
  </main> -->
	<div class="Home">
		<HomeComponent />
	</div>
</template>

<script>
import HomeComponent from '@/components/study1/HomeComponent.vue';
// import TheWelcome from '../components/TheWelcome.vue'

export default {
	name: 'HomeView',
	components: {
		HomeComponent,
	},
};
</script>

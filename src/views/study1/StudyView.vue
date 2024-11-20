<!-- <template>
  <div class="about">
    <StudyComponent />
  </div>
</template>

<script>
import StudyComponent from '@/components/StudyComponent.vue'

export default {
  name: 'AboutView',
  components: {
    StudyComponent
  }
}
</script> -->

<template>
	<div>
		<h1>Query</h1>

		<h2>name:{{ $route.query.name }}</h2>
		<h2>name:{{ $route.query.age }}</h2>
	</div>
</template>
<script>
export default {
	name: 'StudyView',
	created() {
		console.log(this.$route.query.name);
		console.log(this.$route.query.name);
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

<template>
	<div class="display">
		{{ value }}
	</div>
</template>

<script>
export default {
	props: ['value'],
};
</script>

<style scoped>
.display {
	background-color: #333;
	color: white;
	font-size: 2em;
	padding: 20px;
	margin-bottom: 10px;
	text-align: right;
}
</style>

<template>
	<div id="app">
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/BoardPage">BoardPage</router-link>
			<router-link to="/WorkPage">WorkPage</router-link>
		</nav>
		<router-view />
		<!-- 최상위 라우트 출력 -->
	</div>
</template>

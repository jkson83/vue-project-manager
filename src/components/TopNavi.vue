<template>
	<nav>
		<ul>
			<li>
				<a href="/#" aria-label="홈으로"><span>Home</span></a>
			</li>
			<li
				v-for="(item, index) in listData"
				:key="index"
				@mouseenter="isActive = index"
				@mouseleave="isActive = null"
			>
				<router-link :to="{ name: item.link_to }">
					<span>{{ item.name }}</span>
				</router-link>
				<div class="subMenu" :class="{ active: index === isActive }">
					<ul>
						<li v-for="(item, index) in listData[index].sublist" :key="index">
							<router-link :to="{ name: item.link_to }">
								{{ item.name }}
							</router-link>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</nav>
</template>
<script>
import siteMenuList from '@/assets/data/menuList.js';
export default {
	name: 'TopNavi',
	data() {
		return {
			listData: siteMenuList.listData, // data에 바로 할당
			isActive: null,
			// currentIndex: null,
			subList: siteMenuList.listData.children,
		};
	},
	methods: {
		// viewDepth(idx) {
		// 	this.currentIndex = idx;
		// },
	},
};
</script>

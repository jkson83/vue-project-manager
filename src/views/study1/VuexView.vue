<template>
	<div>
		<h1>Params</h1>
		<h2>params로 받은 데이터</h2>
		<h2>name: {{ $route.params.name }}</h2>
		<h2>age: {{ $route.params.age }}</h2>

		<h2>props로 받은 데이터</h2>
		<h2>name: {{ name }}</h2>
		<h2>age: {{ age }}</h2>

		Home Component
		<ul id="example-1">
			<!-- <li v-for="user in Users" v-bind:key="user">
            {{ user.name }}
          </li> -->
		</ul>
		<button @click="addUser">유저등록</button>
	</div>
</template>
<script>
// import { mapGetters, mapMutations } from 'vuex';

export default {
	name: 'VuexView',
	props: {
		name: {
			type: String,
			default: '',
		},
		age: {
			type: Number,
			default: 0,
		},
	},
	created() {
		console.log(this.$route.params.name);
		console.log(this.$route.params.age);
	},
	// name: "HomeComponent",
	// data() {
	//   return {
	//     user: { id: 4, name: '개발이 취미인 사람', address: 'Seoul' },
	//   };
	// },
	// created() {
	//   console.log("유저 목록 : ", this.Users);
	// },
	// computed: {
	//   //mapState 데이터 등록
	//   ...mapGetters(["Users"]), //Users라느 변수명을 사용
	//   ...mapGetters({Users: "Users" }), //키 Users는 해당 컴포넌트에서 사용할 변수명 값은 State 값
	// },
	// methods: {
	//   //mapMutation 함수 등록
	//   ...mapMutations(["addUsers"]),
	//   ...mapMutations({ addUsers: "addUsers" }),

	//   addUsers() {
	//     console.log('함수실행?');
	//     //Mutation 함수 사용
	//     this.addUsers(this.user);
	//     this.$store.commit("addUsers", this.user)
	//   }
	// }
};
</script>

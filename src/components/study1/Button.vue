<template>
	<div>
		버튼 이름 :
		<button @click="onClick">{{ name }}</button>
		<div>
			Emit 입력:
			<input type="text" v-model="value" />
			<button @click="onEmit">{{ name }} Emit</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CommonButton',
	props: {
		name: String,
	},
	/**
	 * Creation 단계
	 *  가장 먼저 실행되는 훅 data와 event가 세팅되지 않은 시점
	 */
	// beforeCreate() {
	//   console.log('beforeCreate')
	// },
	data() {
		// console.log('data')
		return {
			value: '',
		};
	},
	methods: {
		onClick() {
			console.log(this.name, '버튼 클릭');
		},
		onEmit() {
			this.$emit('setInput', this.value);
		},
		onTemplate() {
			console.log('템플릿 실행');
		},
	},

	/**
	 * data와 event가 활성화되어 접근할 수 있는 단계
	 * 메서드를 호출해보면 에러가 나오지 않는다.
	 *  */
	// created() {
	//   console.log('created')
	//   this.onClick()
	// },
	/**
	 * Mounting 단계
	 *
	 * 만약 초기 랜더링 직전에 돔을 변경하고자 한다면 이 단계를 활용하자,
	 * 하지만 컴포넌트 초기에 세팅할 데이터들은 created 단계에서 이뤄져야한다.
	 *
	 * html 태그가 실행된 후 실행 => 즉, <template> 태그가 실행된 후 실행
	 *
	 * 템플릿과 렌더 함수들이 컴파일 된 후에 첫 렌더링이 일어나기 직전에 실행됨
	 */
	// beforeMount() {
	//   console.log('beforeMount')
	// },
	/**
	 * 여기서는 컴포넌트, 템플릿, 랜더링된 돔에 접근할 수 있는 단계이다.
	 */
	// mounted() {
	//   console.log('ButtonComponent Mounted')
	// }
};
</script>

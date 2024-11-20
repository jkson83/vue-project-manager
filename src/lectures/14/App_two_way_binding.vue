<template>
	<div>
		<h2>input Value</h2>
		<!-- <input
			type="text"
			:value="inputValue"
			@:input="event => (inputValue = event.target.value)"
		/> -->
		<!-- <input type="text" v-model.lazy="inputValue" /> -->
		<!-- <input type="text" v-model.number="inputValue" /> -->
		<input type="text" v-mode.trim="inputValue" />
		<div>{{ inputValue }}</div>
		<div>{{ typeof inputValue }}</div>
		<h2>textarea value</h2>
		<textarea v-model="textareaValue"></textarea>
		<!-- <textarea :value="textareaValue"></textarea> -->
		<div>{{ textareaValue }}</div>
		<h2>checkbox value</h2>
		<label for="checkbox">{{ checkboxValue }}</label>
		<input
			type="checkbox"
			id="checkbox"
			v-model="checkboxValue"
			true-value="Yes"
			false-value="No"
		/>
		<h3>checkbox values</h3>
		<div>
			<label>
				<input type="checkbox" value="html" v-model="checkboxValues" />
				Html
			</label>
			<label>
				<input type="checkbox" value="css" v-model="checkboxValues" />
				css
			</label>
			<label>
				<input type="checkbox" value="javascript" v-model="checkboxValues" />
				javascript
			</label>
		</div>
		{{ checkboxValues }}

		<h2>radio value</h2>
		<div>
			<label>
				<input type="radio" name="type" value="O" v-model="radioValue" />
				O형
			</label>
			<label>
				<input type="radio" name="type" value="A" v-model="radioValue" />
				A형
			</label>
		</div>
		{{ radioValue }}
		<h2>select value</h2>
		<select v-model="selectValue">
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>
		<div>{{ selectValue }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref(null);
		const textareaValue = ref(null);
		const checkboxValues = ref([]);
		const checkboxValue = ref('Yes');
		const radioValue = ref('O');
		const selectValue = ref('html');
		return {
			inputValue,
			textareaValue,
			checkboxValue,
			radioValue,
			selectValue,
			checkboxValues,
		};
	},
};
</script>

<style lang="scss" scoped></style>

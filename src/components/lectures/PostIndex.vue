<template>
	<main>
		<div clas="container py-4">
			<PostCreate @create-post="createPost"></PostCreate>
			<hr class="my-4" />
			<div class="row g-3">
				<div v-for="post in posts" :key="post.id" class="col col-4">
					<PostIndex
						:title="post.title"
						:contents="post.contents"
						:type="post.type"
						:is-like="post.isLike"
						@toggle-like="post.isLike = !post.isLike"
					></PostIndex>
				</div>
			</div>
			<hr class="my-4" />
			<LabelInput
				v-model="username"
				label="이름"
				class="parent-calss"
				style="color: red"
				id="parent-id"
			></LabelInput>
		</div>
	</main>
</template>

<script>
import { ref, reactive } from 'vue';
import PostItem from '@/components/PostIndex.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
export default {
	components: {
		PostItem,
		PostCreate,
		LabelInput,
	},
	setup() {
		const post = reactive({
			title: '제목2',
			contents: '내용2',
		});
		const posts = reactive([
			// eslint-disable-next-line prettier/prettier
			{ id: 1, title: '제목1', contents: '내용1', isLike:true, type:'news' },
			// eslint-disable-next-line prettier/prettier
			{ id: 2, title: '제목2', contents: '내용2', isLike:true, type:'news'  },
			// eslint-disable-next-line prettier/prettier
			{ id: 3, title: '제목3', contents: '내용3', isLike:true, type:'news'  },
			// eslint-disable-next-line prettier/prettier
			{ id: 4, title: '제목4', contents: '내용4' , isLike:false, type:'notice' },
			// eslint-disable-next-line prettier/prettier
			{ id: 5, title: '제목5', contents: '내용5' , isLike:false, type:'notice' },
		]);
		const createPost = newPost => {
			console.log('createPost');
			console.log('newTItle', newPost);
			posts.push(newPost);
		};
		const username = ref('');
		const firstname = ref('');
		const lastname = ref('');
		return { post, posts, createPost, username, firstname, lastname };
	},
};
</script>

<style lang="scss" scoped></style>

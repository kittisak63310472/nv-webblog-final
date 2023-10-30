<template>
	<div>
		<h1>แสดง ข้อมูลหมวกกันน็อค</h1>
		<p>id: {{ bloghelmet.id }}</p>
		<p>title: {{ bloghelmet.typehelmet }}</p>
		<p>content: {{ bloghelmet.detail }}</p>
		<p>category: {{ bloghelmet.weight }}</p>
		<p>status: {{ bloghelmet.size }}</p>
		<p>status: {{ bloghelmet.price }}</p>
		<p>status: {{ bloghelmet.Protectionlevel }}</p>
		<p>status: {{ bloghelmet.material }}</p>
		<p>
			<button v-on:click="navigateTo('/bloghelmet/edit/' + bloghelmet.id)">
				แก้ไข bloghelmet
			</button>
			<button v-on:click="navigateTo('/blogshelmet')">กลับ</button>
		</p>
	</div>
</template>
<script>
import BlogshelmetService from "@/services/BlogshelmetService";
export default {
	data() {
		return {
			bloghelmet: null,
		};
	},
	async created() {
		try {
			let bloghelmetId = this.$route.params.bloghelmetId;
			this.bloghelmet = (await BlogshelmetService.show(bloghelmetId)).data;
		} catch (error) {
			console.log(error);
		}
	},
	methods: {
		navigateTo(route) {
			this.$router.push(route);
		},
	},
};
</script>
<style scoped>
</style>

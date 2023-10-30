<template>
	<div>
		<h2>รายการหมวกกันน็อคทั้งหมด</h2>
		<p><button v-on:click="logout">Logout</button></p>
		<h4>จํานวน หมวกกันน็อค {{ blogshelmet.length }} อัน</h4>
		<p><button v-on:click="navigateTo('/bloghelmet/create')">เพิ่ม หมวกกันน็อค</button></p>
		<div v-for="bloghelmet in blogshelmet" v-bind:key="bloghelmet.id">
			<p>ลำดับที่: {{ bloghelmet.id }}</p>
			<p>ประเภท: {{ bloghelmet.typehelmet }}</p>
			<p>น้ำหนัก: {{ bloghelmet.weight }}</p>
			<p>ขนาด: {{ bloghelmet.size }}</p>
			<p>ราคา: {{ bloghelmet.price }} บาท</p>
			<p>วัสดุเกรด: {{ bloghelmet.material }}</p>
			<p>ระดับความปลอดภัย: {{ bloghelmet.Protectionlevel }}</p>

			<p>รายละเอียด: {{ bloghelmet.detail }}</p>
			<p>
				
				<button v-on:click="navigateTo('/bloghelmet/' + bloghelmet.id)">ดู หมวกกันน็อค</button>
				<button v-on:click="navigateTo('/bloghelmet/edit/' + bloghelmet.id)">
					แก้ไข หมวกกันน็อค
				</button>
				<button v-on:click="deleteBloghelmet(bloghelmet)">ลบข้อมูล หมวกกันน็อค</button>
			</p>
			<hr />
		</div>
	</div>
</template>
<script>
import BlogshelmetService from "@/services/BlogshelmetService";
export default {
	data() {
		return {
			blogshelmet: [],
		};
	},
	async created() {
		this.blogshelmet = (await BlogshelmetService.index()).data;
	},
	methods: {
		logout() {
			this.$store.dispatch("setToken", null);
			this.$store.dispatch("setBloghelmet", null);
			this.$router.push({
				name: "login",
			});
		},
		navigateTo(route) {
			this.$router.push(route);
		},
		async deleteBloghelmet(bloghelmet) {
			let result = confirm("Want to delete?");
			if (result) {
				try {
					await BlogshelmetService.delete(bloghelmet);
					this.refreshData();
				} catch (err) {
					console.log(err);
				}
			}
		},
		async refreshData() {
			this.blogshelmet = (await BlogshelmetService.index()).data;
		},
	},
};
</script>
<style scoped>
</style>
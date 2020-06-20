<template>
	<!-- default-active="3-2-1" 默认展开3-2-1-->
	<el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="collapse"  background-color="#545c64">
		<SidebarItem v-for="menu in menuList" :key="menu.path" :item="menu" :collapse="collapse" />
	</el-menu>
</template>
<script>
	import SidebarItem from './SidebarItem.vue'

	export default {
		name: 'Sidebar',
		components: {
			SidebarItem
		},
		props: {
			menuList: {
				type: Array,
				required: true
			},
			collapse: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>
<style>






</style>

<template>


	<div v-if="item.children">
		<template v-if="item.children.length == 0">
			<el-menu-item :index="'/'+item.path">
				<i class="el-icon-document"></i>
				<span slot="title" class="fontStyle" >{{item.title}}</span>
			</el-menu-item>
		</template>
		<el-submenu v-else :index="'/'+item.path">

			<template slot="title">
				<i class="el-icon-location"></i>
				<span slot="title" v-show="!collapse" class="fontStyle">{{item.title}}</span>
			</template>

			<template v-for="child in item.children">
				<SidebarItem v-if="child.children&&child.children.length>0" :item="child" :key="child.path" />
				<el-menu-item v-else :key="child.path" :index="'/'+child.path" class="fontStyle">
					<i class="el-icon-location"></i>
					{{child.title}}
				</el-menu-item>
			</template>

		</el-submenu>

	</div>


</template>

<script>
	export default {
		name: 'SidebarItem',
		created() {
			console.log(this.item)
		},
		props: {
			item: {
				type: Object,
				required: true
			},
			collapse: {
				type: Boolean,
				default: false
			}
		}
	}
</script>
<style scoped="scoped">
	.fontStyle{
		color: white;
	}
</style>

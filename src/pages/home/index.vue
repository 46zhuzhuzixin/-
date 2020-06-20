<template>
	<back :showP='showP'>
		<el-tabs type="border-card">
			<el-tab-pane label="用户管理">
				<homeIndexOne></homeIndexOne>
			</el-tab-pane>
			<el-tab-pane label="配置管理">配置管理</el-tab-pane>
			<el-tab-pane label="角色管理">角色管理</el-tab-pane>
			<el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
		</el-tabs>
	</back>
</template>

<script>
	export default {
		data() {
			return {
				showP:false
			}
		}
	}
</script>

<style scoped>
	.el-tabs--border-card {
		height: 96%;
         background: rgb(247, 247, 247);
		 padding: 0!important;
	}

	.el-tab-pane {
		height: 96% !important;
       padding: 0!important;
	}

	.el-tabs__content {
		height: 94%;
		padding: 0!important;
	}

	.el-tabs--border-card>.el-tabs__content {
		height: 99% !important;
		padding: 0!important;
	} 
	
</style>

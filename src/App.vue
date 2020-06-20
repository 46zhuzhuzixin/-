<template>
  <div id="app">
 
   <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  },
  created(){
    document.body.removeChild(document.getElementById('Loading'))
  //loading
  
  },
}
</script>

<style>
 *{
   margin: 0;
   padding: 0;
   list-style: none;
 }
 html,body,#app,.el-container{
        /*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
         /*外部间距也是如此设置*/
        margin: 0px;
        /*统一设置高度为100%*/
        height: 100%;
    }
 body{
   background: #f7f7f7;
 }
 .rightContent{
   
    height: 99%;
 }
 .rightContnetBox{
   height: 100%;
   padding: 10px;
   box-shadow: 4px 5px 20px #ccc;
 }
 .el-tabs--border-card>.el-tabs__content {
		height: 99% !important;
		padding: 0!important;
	} 
</style>

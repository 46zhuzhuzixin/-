<template>
  
  <el-col :span="24" class="rightContent">
    <div class="rightContnetBox">
            <p style="color:rgb(113, 111, 111);padding:0 0 10px 0" v-show='this.showP'>{{this.$route.name}}</p>
            <slot></slot>
        </div>
    </el-col>
    
</template>

<script>
export default {
    props:{
        showP:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>

</style>
<template>
  <div class="bgcord">
       <slot></slot>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
    .bgcord{
       width: 100%;
    height: 100%;
    background: #fff;
     border-radius: 2px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 5px;
    }
</style>
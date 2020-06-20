<template>

             <div :id="this.id" style="width:100%;height:100%"></div>
         
</template>

<script>
export default {
    // 定义接受的数据
    props:{
       id:{
           type:String,
           default:'tab1'
       },
       pieData:{
            type:Array,
           default:null
       },
       pieName:{
           type:String,
           default:null
       }
    },
    data(){
        return{

        }
    },
    created(){
        console.log(this.id)
    },
    mounted(){
        this.$nextTick(function () {
        this.drawLine()
        })
    },
    methods:{
         drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById(this.id))
        // 绘制图表
        myChart.setOption({
        
            title: {
        text: this.pieName,
        subtext: '',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        show:false
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: this.pieData,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
        });
        myChart.resize();
    }
    }
}
</script>

<style scoped>

</style>
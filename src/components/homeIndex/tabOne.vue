<template>
  <div class="content">
    <div class="top">
      <el-col :span="8" style="height:100%;padding:20px;">
        <bgcord>
          <li>当天支付图片</li>
          <li>
            <span>当天支付</span>
            <span>120000</span>
          </li>
        </bgcord>
      </el-col>
      <el-col :span="8" style="height:100%;padding:20px">
        <bgcord>
          <li>当天支付图片</li>
          <li>
            <span>当天支付</span>
            <span>120000</span>
          </li>
        </bgcord>
      </el-col>
      <el-col :span="8" style="height:100%;padding:20px">
        <bgcord>
          <li>当天支付图片</li>
          <li>
            <span>当天支付</span>
            <span>120000</span>
          </li>
        </bgcord>
      </el-col>
    </div>
    <div class="center">
      <div class="centerDiv">
        <bgcord>
          <echartPie :id="tab1" :pieData="piedata" :pieName="pieName"></echartPie>
        </bgcord>
      </div>
      <div class="centerDiv">
        <bgcord>
          <echartPie :id="tab2" :pieData="piedata"></echartPie>
        </bgcord>
      </div>
    </div>
    <div class="foot">
      <div class="footDiv">
        <bgcord>交付异常:</bgcord>
      </div>
      <div class="footDiv">
        <bgcord>提现异常:</bgcord>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab1: "tab1",
      tab2: "tab2",
      pieName: "支付信息",
      piedata: [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 274, name: "联盟广告" }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.topEl {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.content {
  height: 100%;

  overflow: hidden;
}
.top {
  width: 100%;
  height: 15%;

  margin: 2% 0 1% 0;
}
.top li {
  width: 50%;
  height: 100%;
  float: left;

  box-sizing: border-box;
}
.top li span {
  width: 100%;
  height: 50%;

  display: inline-block;
  float: left;
  box-sizing: border-box;
  text-align: center;
}
.top li span:nth-child(1) {
  padding: 10% 0 0 0;
}
.top li span:nth-child(2) {
  padding: 5% 0 0 0;
}
.center {
  width: 100%;
  height: 30%;

  margin-bottom: 3%;
}
.foot {
  width: 100%;
  height: 43%;
}
.center .centerDiv {
  width: 48%;
  height: 100%;
  float: left;

  margin: 1%;
}
.foot .footDiv {
  width: 48%;
  height: 100%;
  float: left;

  box-sizing: border-box;
}
.foot .footDiv {
  margin: 0 1%;
}
</style>
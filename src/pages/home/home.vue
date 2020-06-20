<template>
  <el-container>
    <el-header>
      <el-carousel height="60px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="asideTop">
          <li>
            <el-avatar icon="el-icon-user-solid"></el-avatar>
          </li>
          <li v-show="!isCollapse">
            <span>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <p style="margin-to=10%">{用户名}</p>
                </div>
              </el-col>
            </span>
            <span>
              <el-col :span="12">
                <div class="grid-content bg-purple-dark">
                  <el-button type="text">在线</el-button>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple-dark">
                  <el-button type="text">注销</el-button>
                </div>
              </el-col>
            </span>
          </li>
        </div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="/index">首页</el-menu-item>
              <el-menu-item index="/user">用户</el-menu-item>
              <el-menu-item index="/welcome">欢迎</el-menu-item>
              <el-menu-item index="/roles">规则</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- <el-aside width="200px">Aside</el-aside> -->
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-tabs__content {
  height: 96%;
}

.el-header,
.el-aside {
  background-color: #fff;
  color: #333;
  box-shadow: 4px 5px 20px #e5e5e5;
}

.el-menu {
  border-right: none;
}

.el-main {
  padding: 10px;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.asideTop {
  width: 100%;
  height: 60px;
}

.asideTop li:nth-child(1) {
  padding: 20px 0;
}

.asideTop li {
  float: left;
  width: 50%;
  height: 60px;
}

.asideTop li:nth-child(2) span {
  height: 50%;
  width: 100%;

  display: inline-block;
}

.asideTop li:nth-child(2) span:nth-child(1) p {
  line-height: 45px;
}
</style>

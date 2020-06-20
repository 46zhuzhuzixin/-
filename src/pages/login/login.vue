<template>
  <div class="login">
      
     
      <el-row style="margin:5% 0">
  <el-col :span="12"><div class="grid-content bg-purple"><el-button type='primary' plain class="btnClass"  @click="passwordShow">密码登录</el-button></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"> <el-button   type='primary' plain class="btnClass" @click="codeShow">短信登录</el-button></div></el-col>
    </el-row>
    <!-- tabpwd -->
    <el-row v-show='showPassword'>
   <el-form :label-position="labelPosition" label-width="80px" label-padding='12px 12px 0 0' :model="formLabelAlign" :rules="rulesUser"  ref='formLabelAlign'>
 <el-form-item label="用户名" prop="name">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="formLabelAlign.password"></el-input>
  </el-form-item>
  <el-form-item label="验证码"  prop="code">     
<el-row>
  <el-col :span="16" style="padding-right:5%"><div class="grid-content bg-purple"><el-input  ></el-input></div></el-col>
  <!-- prefix-icon="el-icon-edit" icon图标 -->
  <el-col :span="6"><div class="grid-content bg-purple-light">  <indentify :identifyCode="identifyCode"></indentify></div></el-col>
</el-row>
    <el-row>
 
</el-row>
  </el-form-item>
</el-form>
 <el-col :span="24"><div class="grid-content bg-purple-dark"><el-button class='btnClassBottom' type="primary" @click="login">登录</el-button></div></el-col>
    </el-row>
<!-- tabphonecode-->
    <el-row v-show="showCode">
     <el-form  label-width="80px" :model="formLabelCode">
  <el-form-item label="手机号">
    <el-input v-model="formLabelCode.phoneNum"></el-input>
  </el-form-item>
  <el-form-item label="验证码">
    <el-input v-model="formLabelCode.phoneCode"></el-input>
  </el-form-item>
</el-form>
<el-col :span="24"><div class="grid-content bg-purple-dark"><el-button class='btnClassBottom' type="primary">登录</el-button></div></el-col>
    </el-row>
  </div>
</template>

<script>
  import indentify from './indentify.vue'
  import { post } from '../../utils/request'
 export default {
  name: "codetest",
  components:{
    indentify
  },
  data() {
      // const validatePassword = (rule, value, callback) => {
      // }
    return {
          labelPosition: 'right',
        showPassword:true,
        showCode:false,
        identifyCodes: "1234567890",
        identifyCode: "",
        // tabform1
        formLabelAlign: {
             
        },
        //tabform2
        formLabelCode:{
            phoneNum:'',
            phoneCode:''
        },
        //  自定义rules
       
        rulesUser:{
            name: [
               { required: true, message: '请输入用户名', trigger: 'blur' },
                //  { min: 3, message: '长度在 6个字符以上', trigger: 'blur' }
                ],
             password: [
               { required: true, message: '请输入密码', trigger: 'blur' },
            
                ],    
            code: [
            // { validator: checkAge, trigger: 'blur' }
          ]
        }
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
      //切换登录方式
      passwordShow(){
          this.showPassword=true
          this.showCode=false
          
      },
      codeShow(){
            this.showPassword=false
          this.showCode=true
      },

    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    },
    login(){
      this.$router.push('/home')
      // post('/login',{'username':'60001','password':'123'})
      // .then(res=>{
      //   console.log(res.data)
      //   this.$router.push('/home')
      //   // 侧边栏信息
      //   this.$store.commit('setRightList',res.data.data)
      //   // 存储用户名
			// 	this.$store.commit('setUsername',res.data.username)
			// 	// 存储token
			// 	sessionStorage.setItem('token','sadsdsdsfwedadsafwad')
      //   this.$message({
      //     message: '登录成功',
      //     type: 'success',
      //     duration:1000
      //   });

      // })
      // .catch(err=>{
      //   console.log(err)
      // })
    }
  }
};
</script>

<style scoped="scoped">
.btnClass{
    display: block;
    width: 80%;
    margin-left: 10%;
}
.login{
  width: 20%;
  height: 25%;
 
  padding: 2%;
  margin: 0 auto;
  margin-top: 15%;
  border-radius: 5px;
     box-shadow: 4px 5px 20px #e5e5e5;
}

.code{
padding: 5%;

}

.btnClassBottom{
    width: 100%;
}
</style>

<template>
  <div id="login" class="vh100 vw100">
    <div class="sp-container flex f-jc-c f-al-c col vh100 z5">
      <div class="login-container">
        <!--<div class="login-container-item">
          <h3 class="tx-al-c no-select">登录</h3>
        </div>-->
        <div class="login-container-item">
          <el-input v-model="loginForm.userName"
                    placeholder="用户名"
                    clearable>
            <icon-font icon="iconwode" :size="20" slot="prefix"/>
          </el-input>
        </div>
        <div class="login-container-item">
          <el-input v-model="loginForm.passWord"
                    placeholder="密码"
                    type="password"
                    show-password
                    clearable>
            <icon-font icon="iconsuoding" :size="20" slot="prefix"/>
          </el-input>
        </div>
        <div class="login-container-item flex f-jc-r">
          <el-checkbox v-model="rememberMe">记住我</el-checkbox>
        </div>
        <div class="login-container-item">
          <el-button>Sign</el-button>
        </div>
      </div>
    </div>
    <div class="title hyxk no-select absolute bottom0 left0 z5 flex f-jc-c f-al-c vw100">
      <span>群星闪耀,终不过一曲清欢</span>
    </div>
    <div class="babble-container z3 no-select">
      <div id="babbleBack"></div>
    </div>
    <div class="bg vh100 vw100">
      <img src="@/assets/image/login/wallhaven-96qy3w.min.jpg" alt="bg">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import IconFont from "@/components/iconFont";

require('@/assets/js/circleMagic.min')

export default {
  name: 'Login',
  components: {IconFont},
  data() {
    return {
      loginForm: {
        userName: '',
        passWord: ''
      },
      rememberMe: false
    }
  },
  mounted() {
    $('#babbleBack').circleMagic({
      elem: '#babbleBack',
      radius: 10,
      densety: .2,
      color: 'rgba(255,255,255, .4)',
      clearOffset: .8
    });
  }
}
</script>

<style scoped>
#login {
  background: #363636;
  overflow: hidden;
}

.babble-container {
  position: absolute;
  top: 0;
  left: 0;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.bg > img {
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  -webkit-filter: brightness(0.7);
  filter: brightness(0.7);
}

.sp-container {
  position: relative;
}

.title {
  bottom: 10%;
  font-size: 2.25rem;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0 0 5px #e6e6e6;
}

.hyxk {
  font-family: hyxk, serif;
}

@font-face {
  font-family: 'hyxk';
  src: url("../assets/font/hyxk.min.ttf");
}

.login-container {
  width: 45%;
}

.login-container-item {
  padding-bottom: 25px;
}

h3{
  font-size: 25px;
  color: rgba(255,255,255,.8);
  letter-spacing: 2px;
}

/*对不同设备进行适配*/
@media screen and (max-width: 1280px){
  .sp-container{
    width: 680px;
  }
  .login-container{
    padding: 0 25px;
    width: 70%;
  }
  .title{
    font-size: 2rem;
  }
}
@media screen and (max-width: 680px){
  .sp-container{
    width: 360px;
  }
  .login-container{
    padding: 0 25px;
    width: 80%;
  }
  .title{
    font-size: 1.25rem;
  }
}
</style>

<style>
/* login 页面 覆盖的样式*/
html{
  overflow-y: hidden;
}
/*输入框*/
.el-input__prefix {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px !important;
}

.el-input--prefix .el-input__inner {
  padding-left: 40px;
}

.el-input__inner {
  box-sizing: border-box;
  background-color: rgba(32, 32, 32, 0.4);
  height: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  line-height: 20px;
  color: #ffffff;
  font-size: 18px;
  letter-spacing: 2px;
  border: 2px solid rgba(220,223,230,.5);
}

.el-input.is-active .el-input__inner, .el-input__inner:focus {
  border-color:rgba(169,134,120,.5);
}

input::-webkit-input-placeholder { /* WebKit browsers */
  color: #eee !important;
  font-size: 16px;
}

input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color: #eee !important;
  font-size: 16px;
}

input::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #eee !important;
  font-size: 16px;
}

input:-ms-input-placeholder { /* Internet Explorer 10+ */
  color: #eee !important;
  font-size: 16px;
}
/*按钮*/
.el-button{
  width: 100%;
  height: 60px;
  background-color: rgba(46 ,62 ,85 ,.72);
  border: none;
  color: #c5c5c5;
  font-size: 25px;
  letter-spacing: 2px;
  transition: .2s ease-in-out;
}
.el-button:hover{
  background-color: rgba(37, 60, 95, 0.9);
  color: #fff;
  transition: .2s ease-in-out;
}
.el-button:focus{
  background-color: rgba(37, 60, 95, 0.9);
  color: #fff;
  transition: .2s ease-in-out;
}
/*多选框*/
.el-checkbox{
  color: #eee;

}
.el-checkbox__input.is-checked+.el-checkbox__label{
  color: #eeeeee;
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
  background-color: rgba(37, 60, 95, 0.9);
  border-color:  rgba(37, 60, 95, 0.9);
}
.el-checkbox__input.is-focus .el-checkbox__inner{
  border-color:  rgba(37, 60, 95, 0.9);
}
.el-checkbox__inner:hover{
  border-color:  rgba(37, 60, 95, 0.9);
}
.el-checkbox__inner{
  border-color: rgba(37, 60, 95, 0.72);
  background-color: rgba(255,255,255,.72);
}
</style>

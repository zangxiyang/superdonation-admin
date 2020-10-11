<template>
  <div id="login" class="vh100 vw100">
    <div class="sp-container flex f-jc-c f-al-c col vh100">
      <div class="title hyxk no-select">群星闪耀,终不过一曲清欢</div>
      <card>
        <el-input v-model="loginForm.userName"
                  placeholder="用户名">
          <icon-font icon="iconwode" :size="20" slot="prefix"/>
        </el-input>
        <el-input v-model="loginForm.passWord"
                  placeholder="密码"
                  show-password>
          <icon-font icon="iconsuoding" :size="20" slot="prefix"/>
        </el-input>

      </card>
    </div>
    <div class="babble-container">
      <div id="babbleBack"></div>
    </div>
    <div class="bg vh100 vw100">
      <img src="https://s1.ax1x.com/2020/10/11/0gHyV0.jpg" alt="bg">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/card";
import IconFont from "@/components/iconFont";

require('@/assets/js/circleMagic.min')

export default {
  name: 'Login',
  components: {IconFont, Card},
  data() {
    return {
      loginForm: {
        userName: '',
        passWord: ''
      }
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
}

.babble-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
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
  z-index: 5;
}

.title {
  padding: 15px 0;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.8);
}

.hyxk {
  font-family: hyxk, serif;
}

@font-face {
  font-family: 'hyxk';
  src: url("../assets/font/hyxk.min.ttf");
}
</style>
<style>
.el-input__prefix {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px !important;
}
.el-input--prefix .el-input__inner{
  padding-left: 40px;
}
</style>

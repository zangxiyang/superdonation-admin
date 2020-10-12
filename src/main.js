import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/*引入Jq*/
import 'jquery'

/*引入通用样式*/
import '@/assets/css/sup.core.css';

/*引入element插件*/
import './plugins/element.js'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


/*引入iconfont*/
let iconFontUrl = '//at.alicdn.com/t/font_2121686_ra1mkswfzdr.js'
const remoteScript =document.createElement('script')
remoteScript.type = 'text/JavaScript'
remoteScript.src =iconFontUrl
document.body.appendChild(remoteScript)

/*打印版权*/
// TODO LOG VERSION
console.log("%c SuperDonation v0.1  %c Seale %c 群星闪耀,终不过一曲清欢！", "color:#444;background:#eee;padding:5px 0;", "color:#eee;background:#444;padding:5px 0;", "color:#444;background:#eee;padding:5px 0;");
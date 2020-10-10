import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/*引入通用样式*/
import '@/assets/css/sup.core.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

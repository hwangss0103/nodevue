import Vue from 'vue'
import axios from 'axios';

import App from './App.vue'
import router from './router/router'

Vue.config.productionTip = false

Vue.prototype.$http = axios; // 어디서든 vue.$http 혹은 모듈,컴포넌트에는 this.$http 의 방법으로 어디서든 사용가능하다.

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/components/_global';
import { utils } from '@/utils';

import axios from 'axios';
import lodash from 'lodash';

Vue.config.productionTip = false;

Vue.prototype.$http = axios; // 어디서든 vue.$http 혹은 모듈,컴포넌트에는 this.$http 의 방법으로 어디서든 사용가능하다.
Vue.prototype._ = lodash;

Vue.mixin(utils);

export const EventBus = new Vue();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

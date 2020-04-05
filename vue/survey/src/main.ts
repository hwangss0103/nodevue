import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueLodash from 'vue-lodash'
import LoDashStatic from "vue-lodash"
import * as _ from 'lodash';

import axios, {AxiosStatic} from 'axios'

// import Global from './components/_global'
import '@/components/_global';
import { utils } from './mixins/utils'

Vue.config.productionTip = false

// Vue.prototype.$http = axios;
Vue.prototype.ApiUrl = 'http://localhost:7000/apis/';
Vue.prototype.$isLocalEnv = true;


Vue.mixin(utils);
Vue.use(LoDashStatic, { name: 'custom' , LoDashStatic: LoDashStatic})
Vue.use({
  install() {
    Vue.prototype.$http = axios.create({
      baseURL: process.env.VUE_APP_API_URL
    });
  }
});

declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosStatic,
    $_: LoDashStatic
  }
}

const EventBus = new Vue({
  data() {
    return {
      isAdmin: false
    }
  },
  methods: {
    
  },
})
Vue.prototype.EventBus = EventBus;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tag } from 'vant';
import 'vant/lib/index.css';
import less from 'less'
Vue.use(less)

Vue.use(Tag);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

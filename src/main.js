import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css'
import './assets/css/base.css'
import './utils/rem'
import { Tabbar, TabbarItem } from 'vant'
import 'vant/lib/index.css'
import './assets/css/resetvant.css'
import dcTopBar from './components/dc-top-bar.vue'
Vue.use(Tabbar).use(TabbarItem).use(dcTopBar)
Vue.config.productionTip = false
Vue.component('dcTopBar', dcTopBar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

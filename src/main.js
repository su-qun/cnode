import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import router from './router'
import './assets/style.less'
import './components/index'
import './filters/index'
import './plugins/moment'
import store from '../src/store/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

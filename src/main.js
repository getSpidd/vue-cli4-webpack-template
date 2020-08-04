import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from '@/locale'
import './utils/rem'
import './utils/permission'
// import $ from 'jquery'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')

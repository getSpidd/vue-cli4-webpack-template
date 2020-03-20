import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'

console.log($)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

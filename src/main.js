import Vue from 'vue'
import App from './App.vue'
import store from './store'
import $ from 'jquery'

console.log($)

let xhr = new XMLHttpRequest();


// http-proxy
xhr.open('GET', '/api/user', true);

xhr.onload = function () {
  console.log(xhr.response);
}

xhr.send();

console.log('home');

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

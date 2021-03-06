import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = "http://localhost:8181";
Vue.prototype.axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

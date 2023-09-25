import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import Loading from '@/components/Loading'

Vue.component('Loading', Loading)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

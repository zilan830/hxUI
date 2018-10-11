import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import './components/index'
import './self-ui'
import router from './util/router/index'
import './plugins/element.js'
import './util/style/index.styl'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

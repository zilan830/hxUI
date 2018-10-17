import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import './components/index'
import './self-ui'
import router from './util/router/index'
import './plugins/element.js'
import './util/style/index.styl'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/default.css'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false;
VueClipboard.config.autoSetContainer = true

Vue.use(VueHighlightJS);
Vue.use(VueClipboard);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

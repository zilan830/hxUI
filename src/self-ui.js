import Vue from 'vue'
import HHeader from './components/header/Header.vue'

//全局注册组件，方便使用
const components = {
  HHeader,
};

const installs = {};

function install () {
  Object.keys(components).forEach(key=> {
    components[key].install = () => {
      Vue.component(key,components[key])
    };
    installs[key] = components[key];
  });
}

install();

// 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default installs;
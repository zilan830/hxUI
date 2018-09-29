import Vue from 'vue'
import HHeader from './Header.vue'
import './cube-ui'
import {createAPI} from 'cube-ui'

const Components = {
  HHeader,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;

export const createAPI = createAPI;


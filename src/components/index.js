/* eslint-disable no-new */
import Vue from 'vue'
import HHeader from './Header.vue'
import FormEditWrapper from './formItemEdit/formEditWrapper.vue'
import FormAttrWrapper from './formItemEdit/formAttrWrapper.vue'
import './cube-ui'
import { createAPI as cubeAPI } from 'cube-ui'

const Components = {
  HHeader,
  FormEditWrapper,
  FormAttrWrapper
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;

export const createAPI = cubeAPI;


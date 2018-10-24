/* eslint-disable no-new */
import Vue from 'vue'
import HxHeader from './header/Header.vue'
import HxLayout from './layout/Layout.vue'
import HxTarbar from './tarbar/TarBar.vue'
import HxCell from './cell/CellBox.vue'
import HxCells from './cell/CellForm.vue'
import HxGroup from './group/Group.vue'
import FormEditWrapper from './formItemEdit/formEditWrapper.vue'
import FormAttrWrapper from './formItemEdit/formAttrWrapper.vue'
import './cube-ui'
import { createAPI as cubeAPI } from 'cube-ui'
//import HX from './allComponents'

// import {
//   HHeader,
//   FormEditWrapper,
//   FormAttrWrapper,
//   HLayout,
//   HTarbar,
//   HxCell,
//   HxCells,
//   HxGroup,
//   HxForm } from './allComponents.js'

const Components = {
  HxHeader,
  FormEditWrapper,
  FormAttrWrapper,
  HxLayout,
  HxTarbar,
  HxCell,
  HxCells,
  HxGroup,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

// Vue.use(HHeader);
// Vue.use(FormAttrWrapper);
// Vue.use(FormEditWrapper);
// Vue.use(HLayout);
// Vue.use(HTarbar);
// Vue.use(HxCell);
// Vue.use(HxCells);
// Vue.use(HxGroup);
// Vue.use(HxForm);

//Vue.use(HX)

export default Components;

export const createAPI = cubeAPI;


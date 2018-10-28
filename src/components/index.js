/* eslint-disable no-new */
import Vue from 'vue'
import HxHeader from './header/Header.vue'
import HxLayout from './layout/Layout.vue'
import HxTarbar from './tarbar/TarBar.vue'
import HxCell from './cell/CellBox.vue'
import HxCells from './cell/CellForm.vue'
import HxGroup from './group/Group.vue'
import HxCollapse from './group/CollapseGroup.vue'
import FormEditWrapper from './formItemEdit/formEditWrapper.vue'
import FormAttrWrapper from './formItemEdit/formAttrWrapper.vue'
import './cube-ui'
import { createAPI as cubeAPI } from 'cube-ui'


const Components = {
  HxHeader,
  FormEditWrapper,
  FormAttrWrapper,
  HxLayout,
  HxTarbar,
  HxCell,
  HxCells,
  HxGroup,
  HxCollapse
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});


export default Components;

export const createAPI = cubeAPI;


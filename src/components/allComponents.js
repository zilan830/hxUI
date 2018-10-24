/* eslint-disable no-new */
import Vue from 'vue'
import HHeader from './header/Header.vue'
import HLayout from './layout/Layout.vue'
import HTarbar from './tarbar/TarBar.vue'
import HxCell from './cell/CellBox.vue'
import HxCells from './cell/CellForm.vue'
import HxGroup from './group/Group.vue'
import HxForm from './newForm/Form.vue'
import FormEditWrapper from './formItemEdit/formEditWrapper.vue'
import FormAttrWrapper from './formItemEdit/formAttrWrapper.vue'


const components = [
  HHeader,
  FormEditWrapper,
  FormAttrWrapper,
  HLayout,
  HTarbar,
  HxCell,
  HxCells,
  HxGroup,
  HxForm
];


function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  components.forEach((Component) => {
    Component.install(Vue)
  })
}

const camelizeRE = /-(\w)/g

function camelize (str) {
  str = String(str)
  return str.replace(camelizeRE, function (m, c) {
    return c ? c.toUpperCase() : ''
  })
}

function processComponentName(Component, { prefix = '', firstUpperCase = false } = {}) {
  const name = Component.name
  const pureName = name.replace(/^cube-/i, '')
  let camelizeName = `${camelize(`${prefix}${pureName}`)}`
  if (firstUpperCase) {
    camelizeName = camelizeName.charAt(0).toUpperCase() + camelizeName.slice(1)
  }
  return camelizeName
}

const Hx={
  install,
};

components.forEach((Component) => {
  const name = processComponentName(Component, {
    firstUpperCase: true
  });
  Hx[name] = Component
});

if (typeof window !== 'undefined' && window.Vue) {
  console.log('$PARANS~~~nima')
  window.Vue.use(install)
}


export default Hx


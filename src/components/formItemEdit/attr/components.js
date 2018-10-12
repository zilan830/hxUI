import InputAttr from './InputAttr.vue'

const allComponents = [
  InputAttr
];

const components = {};

allComponents.forEach(Component => {
  components[Component.name] = Component
});

export default components;
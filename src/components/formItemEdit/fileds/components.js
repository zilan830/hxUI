import InputEdit from './InputEdit.vue'

const allComponents = [
  InputEdit
];

const components = {};

allComponents.forEach(Component => {
  components[Component.name] = Component
});

export default components;
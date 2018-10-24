import Cell from './../../components/cell/CellBox.vue'

Cell.install = function (Vue) {
  Vue.component(Cell.name,Cell)
};

export default Cell;
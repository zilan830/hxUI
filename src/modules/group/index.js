import Group from './../../components/group/Group.vue'

Group.install = function (Vue) {
  Vue.component(Group.name,Group)
};

export default Group;
import Header from '../../components/header/Header.vue'

Header.install = function (Vue) {
  Vue.component(Header.name,Header)
};

export default Header;
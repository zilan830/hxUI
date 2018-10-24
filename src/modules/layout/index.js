import Layout from '../../components/layout/Layout.vue'

Layout.install = function (Vue) {
  Vue.component(Layout.name,Layout)
};

export default Layout;
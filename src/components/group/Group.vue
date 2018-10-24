<template>
    <div class="hx-group-container">
        <slot>
            <hx-group-item v-for="item in data" :data="item"></hx-group-item>
        </slot>
    </div>
</template>

<script>
  import HxGroupItem from './GroupItem.vue'

  export default{
    name: 'hx-group',
    components: {
      HxGroupItem,
    },
    props: {
      data: Array
    },
    data(){
      return {}
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @require '~cube-ui/src/common/stylus/variable.styl';

    .hx-group-container
        position: relative
        background-color: $form-group-legend-bgc
        line-height: 1.429


</style>
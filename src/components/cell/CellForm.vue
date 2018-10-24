<template>
    <div class="hx-cell-form-container">
        <div class="hx-cell-form-item" v-for="item in dataSource">
            <hx-cell :option="item" :styles="styles"></hx-cell>
            <hx-cell v-for="it in item.children" :item="it"></hx-cell>
        </div>
    </div>
</template>

<script>
  import HxCell from './CellBox.vue'

  export default{
    name: 'hx-cells',
    components: {
      HxCell,
    },
    props: {
      dataSource: Array,
    },
    data(){
      return {
        styles: {
          name:{
            'font-weight':'bold'
          }
        },
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @require '~cube-ui/src/common/stylus/variable.styl';
    .hx-cell-form-item
        .hx-cell-container
            &:first-child
                &:after
                    right: 0
                    left: unset
        .hx-cell-container:not(:first-child)
            height: 30px
            &:after
                content: ""
                width: 0



</style>
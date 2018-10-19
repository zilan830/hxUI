<template>
    <div class="hx-cell-form-container">
        <div class="hx-cell-form-item" v-for="item in dataSource">
            <hx-cell :dataItem="item" :styles="styles"></hx-cell>
            <hx-cell v-for="it in item.children" :dataItem="it"></hx-cell>
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
        .hx-cell-container:not(:first-child)
            height: 30px
            &:before
                content: ""
                height: 0
                width: 0
            &:nth-child(2)
                &:before
                    content: ""
                    width: 100%
                    right: 0
                    left: unset
                    height: 1px
                    border-top: 1px solid #d9d9d9
                    transform: scaleY(0.5)



</style>
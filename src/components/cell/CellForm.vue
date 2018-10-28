<template>
        <div class="hx-cell-form-item">
            <hx-cell :option="option" :styles="styles" v-on="option.events"></hx-cell>
            <hx-cell v-for="it in option.children" :option="it" v-on="it.events"></hx-cell>
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
      option: Object,
    },
    data(){
      return {
        styles: {
          name: {
            'font-weight': 'bold'
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
                    width: calc(100% - 15px)
                    right: 0
                    left: unset
        .hx-cell-container:not(:first-child)
            height: 30px
            &:after
                width: 0
        .hx-cell-container
            &:last-child
                &:after
                    width:100%

</style>
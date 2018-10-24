<template>
    <div class="hx-group-item">
        <p class="hx-group-title">{{data.legend}}</p>
        <hx-cell v-for="item in data.fields"
                 :data-item="item"
                 @click="item.isClick ? item.onClick() : {}"></hx-cell>
    </div>
</template>

<script>
  import HxCell from './../cell/CellBox.vue'
  export default{
    name: 'hx-group-item',
    props: {
      data: Object
    },
    data(){
      return {}
    },
    methods: {},
    components: {
      HxCell
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @require '~cube-ui/src/common/stylus/variable.styl';

    .hx-group-item
        .hx-group-title
            font-size: $fontsize-medium
            color: $form-group-legend-color
            background-color: $form-group-legend-bgc
            padding: 10px 15px
            text-align: left


</style>
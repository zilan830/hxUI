<template>
    <div class="hx-group-item">
        <p class="hx-group-title">{{legend}}</p>
        <hx-item-component v-for="item in fields" :type="item.type" :props="item.props" :events="item.events"></hx-item-component>
    </div>
</template>

<script>
  import HxGroupItem from './GroupItem.vue'
  import HxItemComponent from "./ItemComponent";
  export default{
    name: 'hx-group-item',
    props: {
      legend: String,
      fields: Array
    },
    data(){
      return {}
    },
    computed:{
      componentName(){
        let type = '';
        if(this.field.type){
          type = this.field.type
        }else{
          type = 'hx-cell'
        }
      }
    },
    methods: {},
    components: {
      HxItemComponent,
      HxGroupItem
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
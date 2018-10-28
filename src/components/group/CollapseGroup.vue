<template>
    <div class="hx-cell-form-item">
        <hx-cell :option="createData" :styles="styles" @click="handleClick" class="collapseTitle"></hx-cell>
        <div :style="{transition: 'all 0.3s', height: `${tranHeight}px`, overflow: 'hidden' }">
            <hx-cell v-for="(item,index) in createData.children" :option="item" v-on="item.events"></hx-cell>
        </div>
    </div>
</template>

<script>
  import HxCell from './../cell/CellBox.vue'
  import Group from './Group.vue'
  import {deepClone} from './../../util/globalMethod/clone'

  export default{
    name: 'hx-collapse',
    components: {
      HxCell,
    },
    props: {
      option: {
        name: String,
        value: String,
        isExpand: Boolean,
        children: Array,
      },
    },
    mounted(){
      this.$nextTick(() => {
        this.handleData();
      })
    },
    watch: {
      option: function () {
        this.handleData()
      }
    },
    data(){
      return {
        styles: {
          name: {
            'font-weight': 'bold'
          }
        },
        createData: {},
        isExpand: true,
        arrowUp: 'cubeic-select up',
        arrowDown: 'cubeic-select down',
        tranHeight: 0
      }
    },
    methods: {
      handleClick(){
        this.isExpand = !this.isExpand;
        this.handleInterval()
      },
      handleData(){
        //数据处理
        const data = deepClone(this.option);
        data.arrowIcon = '';
        this.isExpand = data.isExpand;
        this.createData = {...data};
        this.handleInterval()
      },
      handleInterval(){

        if (this.isExpand) {
          this.createData.arrowIcon = this.arrowDown;
          this.tranHeight = 30 * this.option.children.length;
        } else {
          this.createData.arrowIcon = this.arrowUp;
          this.tranHeight = 0
        }
      }
    }
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
                    width: calc(100% - 15px)

    .hx-cell-form-item
        > div
            .hx-cell-container
                height: 30px
                &:after
                    width: 0
            .hx-cell-container
                &:last-child
                    &:after
                        width: 100%

    .hx-cell-form-item
        > div
            .hx-cell-container
                height: 30px
                &:first-child:after
                    width: 0

    .expand
        height: 100%
        transition: all 0.3s
        &.active
            height: 0
            transition: all 0.3s
</style>
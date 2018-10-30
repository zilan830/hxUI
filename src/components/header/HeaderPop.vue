<template>
    <transition name="hx-pop">
        <div :style="{width: wrapperStyle && wrapperStyle.width ? wrapperStyle.width : '100%' , height: wrapperStyle && wrapperStyle.height ? wrapperStyle.height : '100%' }"
             class="hx-header-wrapper-pop-container" v-show="value">
            <div class="hx-pop-background" @click="$emit('on-click-empty')">
            </div>
            <transition name="hx-pop">
                <div :class="['hx-header-pop-container','active']">
                    <hx-cell v-for="item in menus" :option="item.option" v-on="item.events"></hx-cell>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
  import HxCell from './../cell/CellBox.vue'

  export default {
    name: 'hx-header-pop',
    components: {
      HxCell
    },
    props: {
      value: Boolean,
      wrapperStyle: {
        width: Number,
        height: Number
      },
      menus: Array
    },
    data(){
      return {}
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @require '~cube-ui/src/common/stylus/variable.styl';

    .hx-header-wrapper-pop-container
        width: 100%
        height: 100%
        display: flex
        flex-direction: row-reverse
        position: relative
        .hx-pop-background
            position: absolute
            height: 100%
            width: 100%
            background-color: $action-sheet-active-bgc
        .hx-header-pop-container
            width: 0
            opacity: 0
            margin-right: 10px
            border-radius: 3px
            overflow: hidden;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset;;
            &.active
                transiton: all 0.3s
                transform-origin: right top
                opacity: 1
                width: 80px
            .hx-cell-container
                height: 25px

    .hx-pop-enter, .hx-pop-leave-active {
        opacity: 0
    }

    .hx-pop-enter-active, .hx-pop-leave-active {
        transition: opacity 300ms!important;
    }
</style>
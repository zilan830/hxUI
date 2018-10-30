<template>
    <div :class="['hx-cell-container', isActive ? 'hx-cell-click' : '']" @click="handleClick">
        <div class="hx-cell-left">
            <span class="hx-cell-icon" v-if="option && option.hasOwnProperty('iconLeft')">
                <i :class="['iconfont', option && option.hasOwnProperty('iconLeft') ? option.iconLeft : 'no-icon']"></i>
            </span>
            <span class="hx-cell-name" :style="[styles && styles.hasOwnProperty('name') ? styles.name : {}]">
                {{option && option.hasOwnProperty('name') ? option.name : '默认' }}
            </span>
            <span class="hx-cell-icon" v-if="option && option.hasOwnProperty('iconRight')">
                <i :class="['iconfont', option && option.hasOwnProperty('iconRight') ? option.iconRight : 'no-icon']"></i>
            </span>
        </div>
        <div class="hx-cell-right"
             v-if="!isShowRight">
            <i :class="rightIcon"></i>
            <span class="hx-cell-value"
                  :style="[styles && styles.hasOwnProperty('value') ? styles.value : {}]">{{option && option.hasOwnProperty('value') ? option.value : '默认'}}</span>
        </div>
    </div>
</template>

<script>
  export default{
    name: 'hx-cell',
    props: {
      option: {
        iconLeft: String,
        name: String,
        iconRight: String,
        //占全行,仅限右侧文字
        isAllLine: Boolean,
        value: String,
        //默认样式为向右侧箭头:left，可自定义图标
        arrowIcon: String,
      },
      //自定义样式，仅限以下属性
      styles: {
        name: Object,
        value: Object,
      },
    },
    data(){
      return {
        isLeftShow: false,
        isRightShow: false,
        isNameStyle: false,
        isValueStyle: false,
      }
    },
    computed: {
      //是否整行展示
      isShowRight() {
        if (this.option && this.option.hasOwnProperty('isAllLine')) {
          return this.option.isAllLine
        }
        return false
      },
      //右侧箭头位置icon图标更换
      rightIcon() {
        if (this.option && this.option.hasOwnProperty('arrowIcon') && this.option.arrowIcon) {
          if (this.option.arrowIcon === 'left') {
            return 'cubeic-arrow'
          } else {
            return this.option.arrowIcon
          }
        }
        return 'no-right-icon'
      },
      isActive() {
        return this.option && this.option.hasOwnProperty('arrowIcon') && this.option.arrowIcon
      }
    },
    methods: {
      //点击事件统一由用户操作，组件内不设定
      handleClick(e){
        this.$emit('click', e)
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @require '~cube-ui/src/common/stylus/variable.styl';

    .hx-cell-container
        display: flex
        height: 46px
        padding: 0 15px
        position: relative
        overflow: hidden
        background-color: $form-bgc
        &:after
            content: ""
            position: absolute
            bottom: 0
            left: 0
            width: 100%
            display: block
            border-bottom: 1px solid $textarea-border-color
            transform-origin: 0 bottom
        .hx-cell-left
            flex: 1
            display: flex
            align-items: center
            overflow: hidden
            .hx-cell-icon
                &:first-child
                    margin-right: 10px
                &:last-child
                    margin-left: 10px
                .no-icon
                    display: none
            .hx-cell-name
                color: $form-color
                overflow: hidden
                white-space: nowrap
                text-overflow: ellipsis
        .hx-cell-right
            flex: 1
            display: flex
            align-items: center
            color: $form-color
            flex-direction: row-reverse
            .hx-cell-value
                margin-right: 5px

    .cube-form-item
        .cube-form-field
            width: 100%
            .hx-cell-container
                padding: 0

    .no-right-icon
        display: none

    .hx-cell-click:active
        transition: all 0.3s
        background-color: $action-sheet-active-color
        -webkit-tap-highlight-color: $action-sheet-active-color
        .hx-cell-left
            .hx-cell-name
                transition: all 0.3s
                color: white
        .hx-cell-right
            .hx-cell-value
                transition: all 0.3s
                color: white
</style>
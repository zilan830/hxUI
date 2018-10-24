<template>
    <div class="hx-cell-container" @click="handleClick">
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
             v-if="(option && option.hasOwnProperty('value')) || (option && option.hasOwnProperty('path'))"
             @click.stop="handleRoute"
        >
            <i class="cubeic-arrow" v-if="option.path"></i>
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
        value: String,
        path: String,
        isClick: Boolean,
      },
      //自定义样式，仅限以下属性
      styles: {
        name: Object,
        value: Object,
      }
    },
    data(){
      return {
        isLeftShow: false,
        isRightShow: false,
        isNameStyle: false,
        isValueStyle: false
      }
    },
    methods: {
      handleClick(e){
          this.$emit('click',e)
      },
      handleRoute(e){
        //写得有问题，需要优化
        const data = this.option;
        if (data.path) {
          this.$router.push(data.path)
        }else {
          this.handleClick(e)
        }
      }
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

    .cube-form-item
        .cube-form-field
            width: 100%
            .hx-cell-container
                padding: 0
</style>
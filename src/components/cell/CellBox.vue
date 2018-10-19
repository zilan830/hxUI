<template>
    <div class="hx-cell-container" @click="handleClick">
        <div class="hx-cell-left">
            <span class="hx-cell-icon" v-if="dataItem.iconLeft">
                <i :class="['iconfont', dataItem.iconLeft ? dataItem.iconLeft : 'no-icon']"></i>
            </span>
            <span class="hx-cell-name" :style="[styles && styles.hasOwnProperty('name') ? styles.name : {}]">
                {{this.dataItem.name}}
            </span>
            <span class="hx-cell-icon" v-if="dataItem.iconRight">
                <i :class="['iconfont', dataItem.iconRight ? dataItem.iconRight : 'no-icon']"></i>
            </span>
        </div>
        <div class="hx-cell-right" v-if="dataItem.value || dataItem.path">
            <i class="cubeic-arrow" v-if="dataItem.path"></i>
            <span class="hx-cell-value" :style="[styles && styles.hasOwnProperty('value') ? styles.value : {}]">{{dataItem.value}}</span>
        </div>
    </div>
</template>

<script>
  export default{
    name: 'hx-cell',
    props: {
      dataItem: {
        iconLeft: String,
        name: String,
        iconRight: String,
        value: String,
        path: String,
        isClick: Boolean,
        disabled: Boolean,
      },
      //自定义样式，仅限以下属性
      styles: {
        name: Object,
        value: Object,
      }
    },
    data(){
      return {
      }
    },
    methods: {
      handleClick(){
        const data = this.dataItem;
        if (data.isClick) {
          this.$emit('click')
        } else if (data.path) {
          this.$router.push(data.path)
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
        padding-left: 10px
        position: relative
        overflow: hidden
        background-color: $form-bgc
        &:first-child:before
            border-top: none
        &:before
            content: ""
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 1px
            border-top: 1px solid #d9d9d9
            transform: scaleY(0.5)
        .hx-cell-left
            flex: 1
            display: flex
            align-items: center
            overflow: hidden
            .hx-cell-icon
                .no-icon
                    display: none
            .hx-cell-name
                color: $index-list-title-color
                margin: 0 10px
                overflow: hidden
                white-space: nowrap
                text-overflow: ellipsis
        .hx-cell-right
            flex: 1
            display: flex
            align-items: center
            color: $index-list-anchor-color
            flex-direction: row-reverse
            padding-right: 5px
            .hx-cell-value
                margin-right: 10px


</style>
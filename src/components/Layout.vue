<template>
    <div class="layout-container">
        <div class="layout-header">
            <slot name="header"></slot>
        </div>
        <div class="layout-content">
            <cube-scroll>
                <slot name="content"></slot>
            </cube-scroll>
        </div>
        <div class="layout-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'h-layout',
    data() {
      return {}
    },
    methods: {
      selectItem() {

      },
      clickTitle() {

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .layout-container
        height: 100%
        display: flex
        overflow: hidden
        flex-direction: column
        background-color: #f7f7f7
        .layout-content
            flex: 1
            overflow: auto


</style>


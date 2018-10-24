<template>
    <div class="hx-layout-container">
        <div class="hx-layout-header">
            <slot name="header"></slot>
        </div>
        <div class="hx-layout-content">
            <main class="hx-main-content">
                <cube-scroll>
                    <slot name="content"></slot>
                </cube-scroll>
            </main>
        </div>
        <div class="hx-layout-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'hx-layout',
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
    .hx-layout-container
        height: 100%
        display: flex
        overflow: hidden
        flex-direction: column
        background-color: #f7f7f7
        .hx-layout-content
            flex: 1
            overflow: auto
            .hx-main-content
                margin: 10px


</style>


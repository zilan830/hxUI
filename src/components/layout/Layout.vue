<template>
    <div class="hx-layout-container">
        <div class="hx-layout-header">
            <slot name="header"></slot>
        </div>
        <div class="hx-layout-content">
            <main class="hx-main-content">
                    <slot name="content"></slot>
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
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .hx-layout-container
        height: 100vh
        display: flex
        overflow: hidden
        flex-direction: column
        background-color: #f7f7f7
        .hx-layout-content
            flex: 1
            overflow: hidden
            .hx-main-content
                height: 100%


</style>


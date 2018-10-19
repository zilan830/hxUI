<template>
    <div class="inner-wrapper-container">
        <div class="doc-container">
            <slot name="doc"></slot>
        </div>
        <div class="mobile-container">
            <div class="mobile-inner">
                <header class="mobile-header" v-if="!simpleMobile">
                    <h1>{{title}}</h1>
                </header>
                <div class="mobile-content" v-if="!simpleMobile">
                    <cube-scroll>
                        <slot name="mobile"></slot>
                    </cube-scroll>
                </div>
                <div class="no-scroll">
                    <slot name="simple-mobile"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'inner-window',
    props: {
      title: String,
      //主要给展示整体框架用
      simpleMobile: Boolean
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
    .inner-wrapper-container
        display: flex
        height: 100%
        flex: 1
        .doc-container
            flex: 1
            overflow: hidden
            margin: 5px
            border: 1px solid #e6e6e6
            border-radius: 3px
        .mobile-container
            position: relative
            width: 330px
            height: 645px
            margin: 0 56px 0 26px
            top: 50%
            transform: translateY(-50%)
            background: url(./../assets/iphoneX.png) no-repeat center 0
            background-size: 100%
            .mobile-inner
                position: absolute
                top: 64px
                left: 21px
                right: 23px
                bottom: 22px
                overflow: hidden
                border-radius: 0 0 35px 35px
                border: 1px solid #edf0f4
                border-top: none
                background-color: #f7f7f7
                .mobile-header
                    background-color: #e6e6e6
                    box-shadow: 0 2px 1px #e9eaea
                    height: 44px
                    display: flex
                    justify-content: center
                    align-item: center
                    margin-bottom: 10px
                    > h1
                        line-height: 44px
                        font-weight: bold
                        color: #333
                .mobile-content
                    overflow: auto
                    height: 500px
                .no-scroll
                    height: 100%
                    overflow: auto

</style>
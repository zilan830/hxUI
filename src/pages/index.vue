<template>
    <div class="wrapper-container">
        <div class="menu-container">
            <li class="menu-item">
                ddd
            </li>
        </div>
        <section class="content-container">
            <div class="explain-container">
                explain
            </div>
            <div class="mobile-container">

                <mobile-index></mobile-index>

            </div>
        </section>

    </div>
</template>

<script>
  import HView from './hxUI/h-view.vue'
  import MobileIndex from './mobileIndex.vue'
  export default {
    components: {
      HView,
      MobileIndex
    },
    data() {
      return {
        components: [
          {
            'name': '和信 基础组件',
            'shortcut': 'HX Basic',
            'items': [
              {
                path: '/header',
                text: 'Header'
              },
              {
                path: '/formitem',
                text: 'FormItem'
              },
            ]
          },
          {
            'name': 'Basic 基础组件',
            'shortcut': 'Basic',
            'items': [
              {
                path: '/button',
                text: 'Button'
              },
              {
                path: '/loading',
                text: 'Loading'
              },
              {
                path: '/tip',
                text: 'Tip'
              },
              {
                path: '/toolbar',
                text: 'Toolbar'
              },
              {
                path: '/tab-bar',
                text: 'TabBar'
              }
            ]
          },
          {
            'name': 'Form 表单组件',
            'shortcut': 'Form',
            'items': [
              {
                path: '/checkbox',
                text: 'Checkbox'
              },
              {
                path: '/checkbox-group',
                text: 'CheckboxGroup'
              },
              {
                path: '/radio',
                text: 'Radio'
              },
              {
                path: '/input',
                text: 'Input'
              },
              {
                path: '/textarea',
                text: 'Textarea'
              },
              {
                path: '/select',
                text: 'Select'
              },
              {
                path: '/switch',
                text: 'Switch'
              },
              {
                path: '/rate',
                text: 'Rate'
              },
              {
                path: '/validator',
                text: 'Validator'
              },
              {
                path: '/upload',
                text: 'Upload'
              },
              {
                path: '/form',
                text: 'Form'
              }
            ]
          },
          {
            'name': 'Popup 弹窗组件',
            'shortcut': 'Popup',
            'items': [
              {
                path: '/popup',
                text: 'Popup'
              },
              {
                path: '/toast',
                text: 'Toast'
              },

              {
                path: '/picker',
                text: 'Picker'
              },
              {
                path: '/cascade-picker',
                text: 'CascadePicker'
              },
              {
                path: '/segment-picker',
                text: 'SegmentPicker'
              },
              {
                path: '/date-picker',
                text: 'DatePicker'
              },
              {
                path: '/time-picker',
                text: 'TimePicker'
              },
              {
                path: '/dialog',
                text: 'Dialog'
              },
              {
                path: '/action-sheet',
                text: 'ActionSheet'
              },
              {
                path: '/drawer',
                text: 'Drawer'
              },
              {
                path: '/image-preview',
                text: 'ImagePreview'
              }
            ]
          },
          {
            'name': 'Scroll 滚动组件',
            'shortcut': 'Scroll',
            'items': [
              {
                path: '/scroll',
                text: 'Scroll'
              },
              {
                path: '/slide',
                text: 'Slide'
              },
              {
                path: '/index-list',
                text: 'IndexList'
              },
              {
                path: '/swipe',
                text: 'Swipe'
              },
              {
                path: '/sticky',
                text: 'Sticky'
              },
              {
                path: '/scroll-nav-bar',
                text: 'ScrollNavBar'
              },
              {
                path: '/scroll-nav',
                text: 'ScrollNav'
              }
            ]
          }
        ]
      }
    },
    methods: {
      selectItem() {

      },
      clickTitle() {

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    html, body, #app
        height: 100%

    body
        background-color: #fff
        overflow: hidden

    a
        display: block

    .wrapper-container
        display: flex
        .menu-container
            width: 15vw
        .content-container
            flex: 1
            display: flex
            padding: 2vw
            .explain-container
                flex: 1
            .mobile-container
                width: 20vw

    .cube-bar
        z-index: 10
        height: 44px
        line-height: 44px
        text-align: center
        background-color: #EDF0F4
        box-shadow: 0 2px 1px #e9eaea
        -webkit-backface-visibility: hidden
        backface-visibility: hidden
        h1
            font-size: 18px
            font-weight: 500

    .cube-content
        overflow: scroll
        -webkit-overflow-scrolling: touch
        .cube-list
            padding-left: 10px
            z-index: 1
            .cube-index-list-group
                .cube-index-list-anchor
                    font-size: 16px
                ul
                    .cube-item
                        height: 40px
                        line-height: 40px
                        padding-left: 16px
                        display: flex
                        .link
                            display: block
                            position: relative
                            width: 100%
                            color: #333
                            text-decoration: none
                            outline: 0
                            .cubeic-arrow
                                position: absolute
                                right: 0
                                padding: 0 5px
                                color: #ccc
            .cube-index-list-nav
                margin-right: 0px
                padding: 8px 5px
                border-radius: 3px 0 0 3px
                background: #f7f7f7
                box-shadow: 0 0 5px #808080 47
                > ul
                    > li
                        padding: 8px 0
            .cube-index-list-fixed
                font-size: 16px
</style>


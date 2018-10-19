<template>
    <inner-window title="layout" :simpleMobile="simpleMobile">
        <template slot="doc">
            <div class="copy-alert" v-show="successShow">
                <el-alert
                        title="复制成功"
                        type="success"
                        :closable="false">
                </el-alert>
            </div>
            <div class="component-container">
                <div class="component-doc">
                    <p class="component-header">组件代码</p>
                    <ul class="code-lists">
                        <li class="code-item active">
                            <i class="iconfont icon-copy"
                               v-clipboard:copy="code"
                               v-clipboard:success="onCopy"
                               v-clipboard:error="onError"
                            >复制代码</i>
                            <pre v-highlightjs="code"><code class="javascript"></code></pre>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
        <template slot="simple-mobile">
            <h-layout>
                <template slot="header">
                    <h-header :left-options="{showBack: false}">
                        布局
                    </h-header>
                </template>
                <template slot="content">
                    <ul>
                        <li v-for="i in 100">{{i}}</li>
                    </ul>
                </template>
                <template slot="footer">
                    <h-tarbar :tab-column="tabColumn"></h-tarbar>
                </template>
            </h-layout>
        </template>
    </inner-window>
</template>

<script type="text/ecmascript-6">
  import InnerWindow from './../innerWindow.vue'

  export default {
    components: {
      InnerWindow,
    },
    data(){
      return {
        code: `<h-layout>
    <template slot="header">
        <h-header :left-options="{showBack: false}">
            布局
        </h-header>
    </template>
    <template slot="content">
        <ul>
            <li v-for="i in 100">{{i}}</li>
        </ul>
    </template>
    <template slot="footer">
        <h-tarbar :tab-column="tabColumn"></h-tarbar>
    </template>
</h-layout>`,
        index: 0,
        successShow: false,
        simpleMobile: true,
        tabColumn: {
          selectedLabelDefault: '待办',
          tabs: [{
            label: '待办',
            icon: 'cubeic-home',
            path: '/layout'
          }, {
            label: '应用',
            icon: 'cubeic-like',
            path: '/layout'
          }, {
            label: '我的',
            icon: 'cubeic-person',
            path: '/layout'
          }],
        }
      }
    },
    methods: {
      onCopy: function () {
        this.successShow = true;
        setTimeout(() => {
          this.successShow = false
        }, 500)
      },
      onError: function (e) {

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

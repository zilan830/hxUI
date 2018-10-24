<template>
    <inner-window title="layout" :simpleMobile="simpleMobile">
        <template slot="doc">
            <div class="copy-alert" v-show="this.successShow">
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
                        <li class="code-item active">
                            <i class="iconfont icon-copy"
                               v-clipboard:copy="code"
                               v-clipboard:success="onCopy"
                               v-clipboard:error="onError"
                            >复制代码</i>
                            <pre v-highlightjs><code class="javascript">export default {
            data(){
                    tabColumn: {
                        selectedLabelDefault: '首页',
                        tabs: [{
                        label: '首页',
                        icon: 'cubeic-home',
                        path: '/testhome'
                        }, {
                        label: '应用',
                        icon: 'cubeic-like',
                        path: '/testapply'
                        }, {
                        label: '我的',
                        icon: 'cubeic-person',
                        path: '/testme'
                        }],
                    }
            }
    }
                            </code></pre>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
        <template slot="simple-mobile">
            <hx-layout>
                <template slot="header">
                    <hx-header :left-options="{showBack: false}">
                        底部路由切换
                    </hx-header>
                </template>
                <template slot="content">
                    <router-view/>
                </template>
                <template slot="footer">
                    <hx-tarbar :tab-column="tabColumn"></hx-tarbar>
                </template>
            </hx-layout>
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
        code: `<h-tarbar :tab-column="tabColumn"></h-tarbar>`,
        successShow: false,
        simpleMobile: true,
        tabColumn: {
          selectedLabelDefault: '首页',
          tabs: [{
            label: '首页',
            icon: 'cubeic-home',
            path: '/testhome'
          }, {
            label: '应用',
            icon: 'cubeic-like',
            path: '/testapply'
          }, {
            label: '我的',
            icon: 'cubeic-person',
            path: '/testme'
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

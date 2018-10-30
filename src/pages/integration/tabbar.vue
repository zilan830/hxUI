<template>
    <inner-window title="layout" :simpleMobile="simpleMobile">
        <template slot="doc">
            <div class="component-container">
                <div class="component-doc">
                    <p class="component-header">组件代码</p>
                    <ul class="code-lists">
                        <li v-for="item in codeData" :class="{'code-item':true, active:item.isClick}">
                            <div class="code-item-container" v-for="it in item.codeList">
                                <i class="iconfont icon-copy"
                                   v-clipboard:copy="it.code"
                                   v-clipboard:success="onCopy"
                                   v-clipboard:error="onError"
                                >复制代码</i>
                                <pre v-highlightjs="it.code"><code class="javascript"></code></pre>
                            </div>
                        </li>
                    </ul>
                    <div class="component-explain">
                        <p>注意点：</p>
                        <ul>
                            <li>
                                <p>
                                    此组件是基于 cube-ui 的二次封装，
                                    主要是针对底部路由切换，因此几乎没有给开放度。
                                </p>
                            </li>
                        </ul>
                    </div>
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
        codeData: [
          {
            isClick: true,
            codeList: [
              {
                code: '<hx-tarbar :tab-column="tabColumn"></hx-tarbar>'
              },
              {
                code: `export default {
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
            }`
              },
            ],
          },
        ],
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
        this.$message({
          message: '复制成功',
          type: 'success'
        });
      },
      onError: function (e) {

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

<template>
    <inner-window title="Header">
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
                </div>
            </div>
        </template>
        <template slot="mobile">
            <ul class="component-lists">
                <li :class="{'component-item':true, active:this.index === 0}" @click="handleClick(0)">
                    <hx-header :left-options="{showBack: false}">
                        第一个
                    </hx-header>
                </li>
                <li :class="{'component-item':true, active:this.index === 1}" @click="handleClick(1)">
                    <hx-header>
                        第二个
                    </hx-header>
                </li>
                <li :class="{'component-item':true, active:this.index === 2}" @click="handleClick(2)">
                    <hx-header
                            :right-options="{showMore: true}"
                            @on-click-more="showMenus = !showMenus">
                        第三个
                    </hx-header>
                    <hx-header-pop v-model="showMenus" @on-click-empty="showMenus = false" :menus="menus"></hx-header-pop>
                </li>
            </ul>
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
        showMenus: false,
        codeData: [
          {
            isClick: true,
            codeList: [
              {
                code: `<hx-header :left-options="{showBack: false}">第一个</hx-header>`
              },
            ],
          },
          {
            isClick: false,
            codeList: [
              {
                code: `<hx-header>第二个</hx-header>`
              },
            ],
          },
          {
            isClick: false,
            codeList: [
              {
                code: `<hx-header :right-options="{showMore: true}" @on-click-more="showMenus = !showMenus">第三个</hx-header>
<hx-header-pop v-model="showMenus" @on-click-empty="showMenus = false" :menus="menus"></hx-header-pop>`
              },
              {
                code: `export default {
        data(){
           menus:[{
          option: {
            name: '按钮1',
            isAllLine: true
          },
          events: {
            'click': () => this.handleClick()
          }
        }, {
          option: {
            name: '按钮2',
            isAllLine: true
          },
          events: {
            'click': () => this.handleClick()
          }
        },]
        }}`
              }
            ],
          },
        ],
        index: 0,
        menus:[{
          option: {
            name: '按钮1',
            isAllLine: true
          },
          events: {
            'click': () => this.handleClick()
          }
        }, {
          option: {
            name: '按钮2',
            isAllLine: true
          },
          events: {
            'click': () => this.handleClick()
          }
        },]
      }
    },
    methods: {

      handleClick(index){
        this.index = index;
        const codeData = [...this.codeData];
        codeData.forEach(item => {
          item.isClick = false;
        });
        for (const [ind, item] of codeData.entries()) {
          if (ind === index) {
            item.isClick = true;
            break;
          }
        }
      },
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

<template>
    <inner-window title="Header">
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
                        <li v-for="item in codeData" :class="{'code-item':true, active:item.isClick}">
                            <i class="iconfont icon-copy"
                               v-clipboard:copy="item.code"
                               v-clipboard:success="onCopy"
                               v-clipboard:error="onError"
                            >复制代码</i>
                            <pre v-highlightjs="item.code"><code class="javascript"></code></pre>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
        <template slot="mobile">
            <ul class="component-lists">
                <li :class="{'component-item':true, active:this.index === 0}" @click="handleClick(0)">
                    <h-header :left-options="{showBack: false}">
                        第一个
                    </h-header>
                </li>
                <li :class="{'component-item':true, active:this.index === 1}" @click="handleClick(1)">
                    <h-header>
                        第二个
                    </h-header>
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
        codeData: [
          {
            isClick: true,
            code: '<h-header :left-options="{showBack: false}">第一个</h-header>'
          },
          {
            isClick: false,
            code: '<h-header>第二个</h-header>'
          },
        ],
        index: 0,
        successShow:false
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

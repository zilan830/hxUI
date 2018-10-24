<template>
    <inner-window title="Cell">
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
                    <hx-group :data="dataLists">
                    </hx-group>
                </li>
                <li :class="{'component-item':true, active:this.index === 1}" @click="handleClick(1)">

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
        successShow: false,
        dataLists: [
          {
            legend:'标题1',
            fields:[
              {
                iconLeft: 'icon-input',
                name: 'testadfadsfadsfasdfasdfsddsdfasdfsaf',
                iconRight: 'icon-input',
                isLoading: true,
                value: 'test',
                path: '/formitem',
                isClick: true,
                disabled: true,
                onClick: this.handleItemClick
              },
              {
                iconLeft: 'icon-input',
                name: 'hhehehehe',
                iconRight: 'icon-input',
                isLoading: true,
                value: 'test',
                path: '/formitem',
                isClick: false,
                disabled: true
              }
            ]
          },
        ],
        dataSource: [
          {
            name: 'total',
            value: '6666',
            children: [
              {
                name: 'first',
                value: '1111'
              },
              {
                name: 'second',
                value: '2222'
              },
              {
                name: 'third',
                value: '3333'
              }
            ]
          },
          {
            name: 'total2',
            value: '6666',
            children: [
              {
                name: 'first',
                value: '1111'
              },
              {
                name: 'second',
                value: '2222'
              },
              {
                name: 'third',
                value: '3333'
              }
            ]
          }
        ],
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
      onCopy(){
        this.successShow = true;
        setTimeout(() => {
          this.successShow = false
        }, 500)
      },
      onError(){
        console.log('$PARANSfalse')
      },
      handleItemClick() {
        console.log('$PARANS!!!!')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

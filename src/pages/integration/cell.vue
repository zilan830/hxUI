<template>
    <inner-window title="Cell">
        <template slot="doc">
            <div class="component-container">
                <div class="component-doc">
                    <p class="component-header">组件代码</p>
                    <div>
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
            </div>
        </template>
        <template slot="mobile">
            <ul class="component-lists">
                <li :class="{'component-item':true, active:this.index === 0}" @click="handleClick(0)">
                    <hx-cell v-for="item in dataLists" :option="item" v-on="item.events"></hx-cell>
                </li>
                <li :class="{'component-item':true, active:this.index === 1}" @click="handleClick(1)">
                    <hx-cells :option="option"></hx-cells>
                </li>
                <li :class="{'component-item':true, active:this.index === 2}" @click="handleClick(2)">
                    <hx-collapse :option="option"></hx-collapse>
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
            codeList: [
              {
                code: '<hx-cell v-for="item in dataLists" :option="item" v-on="item.events"></hx-cell>'
              },
              {
                code: `export default {
        data(){
          dataLists: [
            {
                iconLeft: 'icon-input',
                name: '所有元素',
                iconRight: 'icon-input',
                value: 'test',
                arrowIcon: 'left',
                events: {
                'click': () => this.handleItemClick()
                }
            },
            {
                name: '这是可以占领整个一行的',
                isAllLine: true
            }
          ]
        },
        method:{
          handleItemClick(e) {
              const toast = this.$createToast({
                time: 1000,
                txt: '点击成功'
              });
              toast.show()
            }
        }
  }`
              },
            ],
          },
          {
            isClick: false,
            codeList: [
              {
                code: '<hx-cells v-for="item in dataSource" :option="item"></hx-cells>'
              },
              {
                code: `export default {
        data(){
          option:{
            name: 'total',
            value: '6666',
            isExpand: true,
            children: [
              {
                name: 'first',
                value: '1111',
              },
              {
                name: 'second',
                value: '2222',
              },
              {
                name: 'third',
                value: '3333',
              }
            ]
          },
        }
  }`
              }
            ],

          },
          {
            isClick: false,
            codeList: [
              {
                code: '<hx-collapse :option="option"></hx-collapse>'
              },
              {
                code: `export default {
        data(){
          option:{
            name: 'total',
            value: '6666',
            isExpand: true,
            children: [
              {
                name: 'first',
                value: '1111',
              },
              {
                name: 'second',
                value: '2222',
              },
              {
                name: 'third',
                value: '3333',
              }
            ]
          },
        }
  }`
              }
            ],

          },
        ],
        index: 0,
        dataLists: [
          {
            iconLeft: 'icon-input',
            name: '所有元素',
            iconRight: 'icon-input',
            value: 'test',
            arrowIcon: 'left',
            events: {
              'click': () => this.handleItemClick()
            }
          },
          {
            name: '这是可以占领整个一行的',
            isAllLine: true
          }
        ],
        option: {
          name: 'total',
          value: '6666',
          isExpand: true,
          children: [
            {
              name: 'first',
              value: '1111',
              id: 1
            },
            {
              name: 'second',
              value: '2222',
              id: 2
            },
            {
              name: 'third',
              value: '3333',
              id: 3
            }
          ]
        },
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
        this.$message({
          message: '复制成功',
          type: 'success'
        });
      },
      onError(){
        console.log('$PARANSfalse')
      },
      handleItemClick() {
        const toast = this.$createToast({
          time: 1000,
          txt: '点击成功'
        });
        toast.show()
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

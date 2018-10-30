<template>
    <inner-window title="Cell">
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
                                    此group封装主要用来包装纯显示数据组件，目前只可用来包装以下组件：'hx-cell','hx-cells','hx-collapse'
                                </p>
                            </li>
                            <li>
                                <p>
                                   具体的参数说明可参考 cell 章节里的说明。
                                </p>
                            </li>
                            <li>
                                <p>
                                    传参数据结构有变，需要注意 option 和 event 不再像 cell 里并列，option 放入了 props 里。
                                </p>
                            </li>
                        </ul>
                        <!--<p>属性说明</p>-->
                        <!--<template>-->
                            <!--<el-table-->
                                    <!--:data="tableData"-->
                                    <!--stripe-->
                                    <!--style="width: 100%">-->
                                <!--<el-table-column-->
                                        <!--prop="args"-->
                                        <!--label="参数">-->
                                <!--</el-table-column>-->
                                <!--<el-table-column-->
                                        <!--prop="explain"-->
                                        <!--label="说明">-->
                                <!--</el-table-column>-->
                                <!--<el-table-column-->
                                        <!--prop="type"-->
                                        <!--label="类型">-->
                                <!--</el-table-column>-->
                                <!--<el-table-column-->
                                        <!--prop="optional"-->
                                        <!--label="可选值">-->
                                <!--</el-table-column>-->
                                <!--<el-table-column-->
                                        <!--prop="default"-->
                                        <!--label="默认值">-->
                                <!--</el-table-column>-->
                            <!--</el-table>-->
                        <!--</template>-->
                    </div>
                </div>
            </div>
        </template>
        <template slot="mobile">
            <ul class="component-lists">
                <li :class="{'component-item':true, active:this.index === 0}" @click="handleClick(0)">
                    <hx-group :schema="schema">
                    </hx-group>
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
                code: '<hx-group :schema="schema"></hx-group>'
              },
              {
                code: `export default {
        data(){
          schema: {
          groups:[
            {
              legend: '标题1',
              fields: [
                {
                  type:'hx-cell',
                  props:{
                    option:{
                      iconLeft: 'icon-input',
                      name: '所有元素',
                      iconRight: 'icon-input',
                      value: 'test',
                      arrowIcon: 'left',
                    },
                  },
                  events: {
                    'click': (e) => {
                      console.log('$PARANS!!', e)
                    }
                  }
                },
                {
                  type:'hx-cell',
                  props:{
                    option:{
                      name: '这是可以占领整个一行的',
                      isAllLine: true
                    }
                  }
                },
              ]
            },
            {
              legend: '标题2',
              fields: [
                {
                  type:'hx-cells',
                  props:{
                    option:{
                      name: 'total',
                      value: '6666',
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
                  },
                },
              ]
            },
            {
              legend: '标题3',
              fields: [
                {
                  type:'hx-collapse',
                  props:{
                    option:{
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
                  },
                },
              ]
            },
          ]
        }
      },
  }`
              },
            ],
          },
        ],
        index: 0,
        schema: {
          groups: [
            {
              legend: '标题1',
              fields: [
                {
                  type: 'hx-cell',
                  props: {
                    option: {
                      iconLeft: 'icon-input',
                      name: '所有元素',
                      iconRight: 'icon-input',
                      value: 'test',
                      arrowIcon: 'left',
                    },
                  },
                  events: {
                    'click': (e) => {
                      console.log('$PARANS!!', e)
                    }
                  }
                },
                {
                  type: 'hx-cell',
                  props: {
                    option: {
                      name: '这是可以占领整个一行的',
                      isAllLine: true
                    }
                  }
                },
              ]
            },
            {
              legend: '标题2',
              fields: [
                {
                  type: 'hx-cells',
                  props: {
                    option: {
                      name: 'total',
                      value: '6666',
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
                  },
                },
              ]
            },
            {
              legend: '标题3',
              fields: [
                {
                  type: 'hx-collapse',
                  props: {
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
                  },
                },
              ]
            },
          ]
        },
        tableData: [{
          args:'',
          explain:'',
          type:'',
          optional:'',
          default:'',
        }, {
          args:'',
          explain:'',
          type:'',
          optional:'',
          default:'',
        }, {
          args:'',
          explain:'',
          type:'',
          optional:'',
          default:'',
        }, {
          args:'',
          explain:'',
          type:'',
          optional:'',
          default:'',
        }]
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
        console.log('$PARANS!!!!')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

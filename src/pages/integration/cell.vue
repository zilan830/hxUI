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
                                    'hx-cell'，'hx-cells','hx-collapse'除了传入结构不一样，
                                    其单个 cell 所拥有功能一样。'hx-cells','hx-collapse'是
                                    基于 'hx-cell' 再封装的。
                                </p>
                            </li>
                            <li>
                                <p>
                                    一般来说'hx-cells','hx-collapse'不建议传入过多参数，
                                    主要是用来展示数据的。如有特殊需求，也可传入。
                                </p>
                            </li>
                        </ul>
                        <p>属性说明</p>
                        <template>
                            <el-table
                                    :data="tableData"
                                    stripe
                                    style="width: 100%">
                                <el-table-column
                                        prop="args"
                                        label="参数">
                                </el-table-column>
                                <el-table-column
                                        prop="explain"
                                        label="说明">
                                </el-table-column>
                                <el-table-column
                                        prop="type"
                                        label="类型">
                                </el-table-column>
                                <el-table-column
                                        prop="optional"
                                        label="可选值">
                                </el-table-column>
                                <el-table-column
                                        prop="default"
                                        label="默认值">
                                </el-table-column>
                            </el-table>
                        </template>
                    </div>
                </div>
            </div>
        </template>
        <template slot="mobile">
            <ul class="component-lists">
                <li :class="{'component-item':true, active:this.index === 0}" @click="handleClick(0)">
                    <hx-cell v-for="item in dataLists" :option="item.option" v-on="item.events"></hx-cell>
                </li>
                <li :class="{'component-item':true, active:this.index === 1}" @click="handleClick(1)">
                    <hx-cells :option="dataSource"></hx-cells>
                </li>
                <li :class="{'component-item':true, active:this.index === 2}" @click="handleClick(2)">
                    <hx-collapse :option="dataSource"></hx-collapse>
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
                code: '<hx-cell v-for="item in dataLists" :option="item.option" v-on="item.events"></hx-cell>'
              },
              {
                code: `export default {
        data(){
          dataLists: [
            {
            option:{
              iconLeft: 'icon-input',
              name: '所有元素',
              iconRight: 'icon-input',
              value: 'test',
              arrowIcon: 'left',
            },
            events: {
              'click': () => this.handleItemClick()
            }
          },
          {
            option:{
              name: '这是可以占领整个一行的',
              isAllLine: true
            }
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
                code: '<hx-cells :option="dataSource"></hx-cells>'
              },
              {
                code: `export default {
        data(){
          dataSource:{
            name: 'total',
            value: '6666',
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
                code: '<hx-collapse :option="dataSource"></hx-collapse>'
              },
              {
                code: `export default {
        data(){
          dataSource:{
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
            option: {
              iconLeft: 'icon-input',
              name: '所有元素',
              iconRight: 'icon-input',
              value: 'test',
              arrowIcon: 'left',
            },
            events: {
              click: () => this.handleItemClick()
            }
          },
          {
            option: {
              name: '这是可以占领整个一行的',
              isAllLine: true
            }
          }
        ],
        dataSource: {
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
        tableData: [
          {
            args: 'iconLeft',
            explain: '最左侧图标 class name 。如有需要，定义好 class name ，赋值传入即可。',
            type: 'String',
            optional: '-',
            default: '-',
          },
          {
            args: 'name',
            explain: '行名。单个 cell 左侧显示内容。',
            type: 'String',
            optional: '-',
            default: '默认',
          },
          {
            args: 'iconRight',
            explain: '行名右侧图标 class name 。如有需要，定义好 class name ，赋值传入即可。',
            type: 'String',
            optional: '-',
            default: '-',
          },
          {
            args: 'value',
            explain: '值。单个 cell 右侧显示内容。',
            type: 'String',
            optional: '',
            default: '默认',
          },
          {
            args: 'arrowIcon',
            explain: '最右侧图标。填入‘left’ ，是‘>’箭头，如需其他图标，输入自定义的图标 class name 即可。传入后则会激活点击效果。',
            type: 'String',
            optional: 'left 和自定义',
            default: '-',
          },
          {
            args: 'events',
            explain: '事件。自定义点击事件的回掉，回掉名必为‘click’',
            type: 'Object',
            optional: '-',
            default: '-',
          },
          {
            args: 'isAllLine',
            explain: '占用整行。如传入 ‘true’ ，则 value 和 arrowIcon 不占此 cell 空间。',
            type: 'Boolean',
            optional: 'true、false',
            default: 'false',
          },
          {
            args: 'styles',
            explain: '可以自定义 name 和 value 的样式。传入自定义的 style 对象即可。',
            type: 'Object',
            optional: '-',
            default: '-',
          },
        ]
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

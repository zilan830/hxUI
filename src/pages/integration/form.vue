<template>
    <inner-window title="Form">
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
                                    form 组件的具体用法还是看 cube-u i里的详细介绍。
                                    这里主要是介绍怎样在 form 组件里使用自定义封装的组件：'hx-cell',
                                    'hx-cells','hx-collapse' 组件。
                                </p>
                            </li>
                            <li>
                                <p>
                                    自定义的组件：'hx-cell',
                                    'hx-cells','hx-collapse' 的 modelKey 没有和组件绑定，但如果你想要
                                    在点击 submit 后获取到他的值，你需要在 model 里定义。
                                </p>
                            </li>
                            <li>
                                <p>
                                    关于 'hx-cell','hx-cells','hx-collapse' 组件的具体参数
                                    说明可参考 cell 章节里的介绍。
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
                <li :class="{'component-item':true, active:index === 0}" @click="handleClick(0)">
                    <cube-form
                            :model="model"
                            :schema="schema"
                            @submit="submitHandler"></cube-form>
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
    data() {
      return {
        index:0,
        codeData: [
          {
            isClick: true,
            codeList: [
              {
                code: `<cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler"></cube-form>`
              },
              {
                code: `export default {
        data(){
          model: {
            checkboxValue: false,
            checkboxGroupValue: [],
            inputValue: '',
            radioValue: '',
            rateValue: 0,
            selectValue: 2018,
            switchValue: true,
            textareaValue: '',
            uploadValue: [],
            hxCellValue: 'test1',
            hxCellsValue: 'test2',
            hxCollapseValue: 'test3'
          },
          schema: {
          groups: [
            {
              legend: '和cube-ui融合',
              fields: [
                {
                  component: 'hx-cell',
                  modelKey: 'hxCellValue',
                  props:{
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
                        console.log('$PARANSargs',e)
                    }
                  }
                },
                {
                  component: 'hx-cells',
                  modelKey: 'hxCellsValue',
                  props:{
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
                {
                  component: 'hx-collapse',
                  modelKey: 'hxCollapseValue',
                  props:{
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
                {
                  type: 'checkbox',
                  modelKey: 'checkboxValue',
                  props: {
                    option: {
                      label: 'Checkbox',
                      value: true
                    }
                  },
                  rules: {
                    required: true
                  },
                  messages: {
                    required: 'Please check this field'
                  }
                },
                {
                  type: 'checkbox-group',
                  modelKey: 'checkboxGroupValue',
                  label: 'CheckboxGroup',
                  props: {
                    options: ['1', '2', '3']
                  },
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'input',
                  modelKey: 'inputValue',
                  label: 'Input',
                  props: {
                    placeholder: '请输入'
                  },
                  rules: {
                    required: true
                  },
                  // validating when blur
                  trigger: 'blur'
                },
                {
                  type: 'radio-group',
                  modelKey: 'radioValue',
                  label: 'Radio',
                  props: {
                    options: ['1', '2', '3']
                  },
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'select',
                  modelKey: 'selectValue',
                  label: 'Select',
                  props: {
                    options: [2015, 2016, 2017, 2018, 2019, 2020]
                  },
                  rules: {
                    required: true
                  }
                },
              ]
            },
          ]
        },
        {
          fields: [
            {
              type: 'submit',
              label: 'Submit'
            },
            {
              type: 'reset',
              label: 'Reset'
            }
          ]
        }
      },
  }`
              },
            ],
          },
        ],
        validity: {},
        valid: undefined,
        model: {
          checkboxValue: false,
          checkboxGroupValue: [],
          inputValue: '',
          radioValue: '',
          rateValue: 0,
          selectValue: 2018,
          hxCellValue: 'test1',
          hxCellsValue: 'test2',
          hxCollapseValue: 'test3'
        },
        schema: {
          groups: [
            {
              legend: '和cube-ui融合',
              fields: [
                {
                  component: 'hx-cell',
                  modelKey: 'hxCellValue',
                  props:{
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
                        console.log('$PARANSargs',e)
                    }
                  }
                },
                {
                  component: 'hx-cells',
                  modelKey: 'hxCellsValue',
                  props:{
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
                {
                  component: 'hx-collapse',
                  modelKey:'hxCollapseValue',
                  props:{
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
                {
                  type: 'checkbox',
                  modelKey: 'checkboxValue',
                  props: {
                    option: {
                      label: 'Checkbox',
                      value: true
                    }
                  },
                  rules: {
                    required: true
                  },
                  messages: {
                    required: 'Please check this field'
                  }
                },
                {
                  type: 'checkbox-group',
                  modelKey: 'checkboxGroupValue',
                  label: 'CheckboxGroup',
                  props: {
                    options: ['1', '2', '3']
                  },
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'input',
                  modelKey: 'inputValue',
                  label: 'Input',
                  props: {
                    placeholder: '请输入'
                  },
                  rules: {
                    required: true
                  },
                  // validating when blur
                  trigger: 'blur'
                },
                {
                  type: 'radio-group',
                  modelKey: 'radioValue',
                  label: 'Radio',
                  props: {
                    options: ['1', '2', '3']
                  },
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'select',
                  modelKey: 'selectValue',
                  label: 'Select',
                  props: {
                    options: [2015, 2016, 2017, 2018, 2019, 2020]
                  },
                  rules: {
                    required: true
                  }
                },
              ]
            },
            {
              fields: [
                {
                  type: 'submit',
                  label: 'Submit'
                },
                {
                  type: 'reset',
                  label: 'Reset'
                }
              ]
            }
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
      },
      submitHandler(e) {
        e.preventDefault()
        console.log('model',this.model)
      },
      validateHandler(result) {
        this.validity = result.validity
        this.valid = result.valid
        console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
      },
      resetHandler(e) {
        console.log('reset', e)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">


</style>

<template>
    <inner-window title="Form">
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
                <li :class="{'component-item':true, active:index === 0}" @click="handleClick(0)">
                    <cube-form
                            :model="model"
                            :schema="schema"
                            :immediate-validate="false"
                            :options="options"
                            @validate="validateHandler"
                            @submit="submitHandler"
                            @reset="resetHandler"></cube-form>
                </li>
                <li :class="{'component-item':true, active:index === 1}" @click="handleClick(1)">

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
            code: '<hx-header :left-options="{showBack: false}">第一个</hx-header>'
          },
          {
            isClick: false,
            code: '<hx-header>第二个</hx-header>'
          },
        ],
        successShow:false,
        validity: {},
        valid: undefined,
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
        },
        schema: {
          groups: [
            {
              legend: '基础',
              fields: [
                {
                  component: 'hx-cell',
                  props:{
                    option:{
                      iconLeft: 'icon-input',
                      name: 'testadfadsfadsfasdfasdfsddsdfasdfsaf',
                      iconRight: 'icon-input',
                      value: 'test',
                    },
                  },
                  events: {
                    'click': (e) => {
                        console.log('$PARANSargs',e)
                    }
                  }
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
                {
                  type: 'switch',
                  modelKey: 'switchValue',
                  label: 'Switch',
                  rules: {
                    required: true
                  }
                },
                {
                  type: 'textarea',
                  modelKey: 'textareaValue',
                  label: 'Textarea',
                  rules: {
                    required: true
                  },
                  // debounce validate
                  // if set to true, the default debounce time will be 200(ms)
                  debounce: 100
                }
              ]
            },
          ]
        },
        options: {
          scrollToInvalidField: true,
          layout: 'standard' // classic fresh
        }
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
      },
      submitHandler(e) {
        e.preventDefault()
        console.log('submit', e)
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

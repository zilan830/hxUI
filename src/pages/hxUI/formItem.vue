<template>
    <page-view type="form-item" title="FormItem">
        <div slot="content" class="form-container">
            <div class="form-list-container">
                <div class="form-item-container">
                    <div class="form-item-inner">
                        <cube-form>
                            <cube-form-group>
                                <cube-form-item :field="inputData.field">
                                    <cube-input v-model="inputData.option.value"
                                                :placeholder="inputData.option.placeholder"
                                                :type="inputData.option.type"
                                                :maxlength="inputData.option.maxlength"
                                                :readonly="inputData.option.readonly"
                                                :disabled="inputData.option.disabled"
                                                :autofocus="inputData.option.autofocus"
                                                :autocomplete="inputData.option.autocomplete"
                                                :clearable="inputData.option.clearable"
                                                :eye="inputData.option.eye"></cube-input>
                                </cube-form-item>
                            </cube-form-group>
                        </cube-form>
                        <i class="cubeic-edit" @click="handleInput()"></i>
                    </div>
                    <div v-show="inputData.isInput" class="input-attributes">
                        <cube-form
                                :model="model"
                                :schema="schema"
                        >
                        </cube-form>
                    </div>
                </div>

            </div>

            <form-edit-wrapper :field="formEdit[0]"></form-edit-wrapper>

            <div class="bottom-btn">
                <cube-button :light="true" @click="handleAdd()">+</cube-button>
            </div>
            <cube-drawer
                    ref="drawer"
                    title="请选择组件"
                    :data="dataSource"
            ></cube-drawer>
        </div>
    </page-view>
</template>

<script>
  import PageView from './page-view.vue'
  export default {
    components: {
      PageView
    },
    props:[

    ],
    data() {
      return {
        formEdit:[
          {
            type:'input-edit'
          }
        ],
        inputData: {
          isInput: false,
          option: {
            label: 'dd',
            value: '',
            type: 'text',
            clearable: true,
            eye: true
          },
          field: {
            label: 'dd',
            rules: {
              required: true
            }
          }
        },
        dataSource: [
          [
            {
              text: "输入框",
              value: "input"
            },
            {
              text: "复选框",
              value: "checkbox"
            },
            {
              text: "复选框组",
              value: "checkboxgroup"
            },
            {
              text: "单选框",
              value: "radio"
            },
          ],
          [],
          []
        ],
        model: {
          typeValue: 1
        },
        schema: {
          groups: [
            {
              legend: '选择框属性',
              fields: [
                {
                  type: 'select',
                  modelKey: 'typeValue',
                  label: '类型',
                  props: {
                    options: [{text: 'text', value: 1}, {text: 'number', value: 2}, {
                      text: 'password',
                      value: 3
                    }, {text: 'date', value: 4}],
                  },
                  rules: {
                    change: (value) => this.changeType(value)
                  },
                },
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
      handleAdd() {
        this.$refs.drawer.show()
      },
      handleInput(){
        const isShow = this.inputData.isInput;
        this.inputData.isInput = !isShow;
      },
      changeType(value){
        const options = [{text: 'text', value: 1}, {text: 'number', value: 2}, {
          text: 'password',
          value: 3
        }, {text: 'date', value: 4}];
        for (const item of options) {
          if (item.value === value) {
            this.inputData.option.type = item.text;
            return true;
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .form-container
        display: flex
        flex-direction: column
        justify-content: space-between
        .form-list-container
            flex: 1
            .form-item-container
                margin-bottom: 2px
                border-radius: 3px
                .form-item-inner
                    display: flex
                    .cubeic-edit
                        width: 50px
                        align-self: center
                        font-size: 20px
                    .cube-input
                        flex: 1

</style>


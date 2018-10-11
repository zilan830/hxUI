<template>
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
</template>

<script>
  export default {
    name: 'input-edit',
    data(){
      return {
        inputData: {
          isInput: false,
          option: {
            label: '名称',
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
        model: {
          typeValue: 1
        },
        schema: {
          groups: [
            {
              legend: '输入框属性',
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

    .form-item-container
        margin-bottom: 5px
        display: flex
        flex-direction: column
        .form-item-inner
            display: flex
            >i
                width: 100px
                display: flex
                justify-content: center
                align-items: center


</style>
<template>
    <div class="form-item-container">
        <div class="form-item-inner">
            <cube-form>
                <cube-form-group>
                    <cube-form-item :field="attr ? attr : inputData.option">
                        <cube-input v-model="attr.value"
                                    :placeholder="attr.placeholder"
                                    :type="attr.type"
                                    :maxlength="attr.maxlength"
                                    :readonly="attr.readonly"
                                    :disabled="attr.disabled"
                                    :autofocus="inputData.option.autofocus"
                                    :autocomplete="inputData.option.autocomplete"
                                    :clearable="inputData.option.clearable"
                                    :eye="inputData.option.eye"></cube-input>
                    </cube-form-item>
                </cube-form-group>
            </cube-form>
            <div class="btn-container">
                <i class="cubeic-edit active" @click="handleInput()"></i>
                <i class="cubeic-remove" @click="handleRemove()"></i>
            </div>
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
  //import {deepClone} from './../../../util/globalMethod/clone';

  export default {
    name: 'input-edit',
    props: {
      //注意index会变化
      index: Number,
      attr: Object
    },

    data(){
      //需要整理字段
      return {
        inputData: {
          isInput: false,
          option: {
            label: '输入框',
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
                    options: [
                      {text: '文字', value: 1},
                      {text: '数字', value: 2},
                      {text: '密码', value: 3},
                      {text: '日期', value: 4}],
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
        const options = [
          {text: 'text', value: 1},
          {text: 'number', value: 2},
          {text: 'password', value: 3},
          {text: 'date', value: 4}];
        for (const item of options) {
          if (item.value === value) {
            this.inputData.option.type = item.text;
            return true;
          }
        }
      },
      handleRemove(){
        this.$emit('remove', this.index)
      }
    },
//    computed:{
//      changeAttr(){
//        this.form = deepClone(this.formData);
//      }
//    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

    .form-item-container
        margin-bottom: 5px
        display: flex
        flex-direction: column
        .form-item-inner
            display: flex
            .btn-container
                width: 50px
                display: flex
                flex-direction: column
                justify-content: space-between
                > i
                    flex: 1
                    display: flex
                    justify-content: center
                    align-items: center
                    cursor: pointer
                    &.active
                        background-color: teal
                        color: white


</style>
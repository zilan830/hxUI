<template>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="控件序列">
            <span class="form-title">序列{{index}}-输入框控件</span>
        </el-form-item>
        <el-form-item label="名称" prop="label">
            <el-input v-model="form.label"></el-input>
        </el-form-item>
        <el-form-item label="类型">
            <el-select v-model="form.type" placeholder="请选择输入框类型">
                <el-option label="文字" value="text"></el-option>
                <el-option label="数字" value="number"></el-option>
                <el-option label="密码" value="password"></el-option>
                <el-option label="日期" value="date"></el-option>
            </el-select>
        </el-form-item>
        <!--应该是个选择框-->
        <el-form-item label="绑定值" prop="value">
            <el-input v-model="form.value" placeholder="请输入绑定值"></el-input>
        </el-form-item>
        <el-form-item label="是否必填">
            <el-switch v-model="form.required"></el-switch>
        </el-form-item>
        <el-form-item label="禁用状态">
            <el-switch v-model="form.disabled"></el-switch>
        </el-form-item>
        <el-form-item label="只读状态">
            <el-switch v-model="form.readonly"></el-switch>
        </el-form-item>
        <el-form-item label="最大长度">
            <el-input v-model="form.maxlength" type="number" placeholder="请输入最大长度"></el-input>
        </el-form-item>
        <el-form-item label="占位文本">
            <el-input v-model="form.placeholder" placeholder="请输入占位文本"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">确定</el-button>
            <el-button @click="resetForm('form')">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
  import {isEmpty} from './../../../util/globalMethod/objectJudg'

  export default {
    name: 'input-attr',
    props: {
      index: Number,
      attr: Object
    },
    mounted: function () {
      this.form = isEmpty(this.attr) ? this.attr : {
        label: `序列${this.index}-输入框`,
        type: 'text',
        required: true,
        value: '',
        disabled: false,
        readonly: false,
        maxlength: 60,
        placeholder: '',
      }
    },
    watch: {
      attr: {
        handler:function () {
          this.form = isEmpty(this.attr) ? this.attr : {
            label: `序列${this.index}-输入框`,
            type: 'text',
            required: true,
            value: '',
            disabled: false,
            readonly: false,
            maxlength: 60,
            placeholder: '',
          }
        }
      }
    },
    data() {
      return {
        form: {},
        rules: {
          type: [],
          value: [
            {required: true, message: '请输入绑定值', trigger: 'blur'}
          ],
          disabled: [],
          readonly: [],
          maxlength: [],
          placeholder: []
        }
      }
    },
    methods: {
      onSubmit(form) {
        this.$refs[form].validate(valid => {
          if (valid) {
            const returnForm = {
              label: this.form.label,
              required: this.form.required,
              type: this.form.type,
              value: this.form.value,
              disabled: this.form.disabled,
              readonly: this.form.readonly,
              maxlength: this.form.maxlength,
              placeholder: this.form.placeholder,
            };
            this.$emit('fetchData', returnForm)
          }
        })
      },
      resetForm(form){
        this.$refs[form].resetFields();
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

    .el-form-item
        .el-form-item__content
            display: flex
            height: 40px
            align-items: center
        .form-title
            color: #606266


</style>
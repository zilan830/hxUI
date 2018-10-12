<template>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="控件序列">
            <span class="form-title">{{title}}</span>
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
            <el-input v-model="form.value"></el-input>
        </el-form-item>
        <el-form-item label="禁用状态">
            <el-switch v-model="form.disabled"></el-switch>
        </el-form-item>
        <el-form-item label="只读状态">
            <el-switch v-model="form.readonly"></el-switch>
        </el-form-item>
        <el-form-item label="最大长度">
            <el-input v-model="form.maxlength" type="number"></el-input>
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
  export default {
    name: 'input-attr',
    props: {
      title: String,
      formData: Object
    },
    data() {
      return {
        form: {
          type: 'text',
          value:'',
          disabled:false,
          readonly:false,
          maxlength:60,
          placeholder:'',
        },
        rules:{
          type:[],
          value:[
            {required: true, message: '请输入绑定值' ,trigger: 'blur'}
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
            this.$emit('fetchData', valid)
          }
        })
      },
      resetForm(form){
        this.$refs[form].resetFields();
      }
    }
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
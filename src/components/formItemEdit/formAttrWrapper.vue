<template>
    <div class="form-list-container">
        <component :is="field.type" :title="field.title"  @fetchData="fetchData"></component>
        <slot></slot>
    </div>
</template>

<script>
  import components from './attr/components'

  export default {
    name:'form-attr-wrapper',
    props:{
      field:{
        title:String,
        type:Object
      },

    },
    methods:{
      componentName(){

      },
      fetchData(data){
        this.$emit('getData',data)
      }
    },
    components
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @require './formEdit.styl'
</style>
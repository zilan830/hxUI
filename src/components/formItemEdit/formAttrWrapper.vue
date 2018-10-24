<template>
    <div class="form-list-container">
        <component :is="field.type" :index="field.index" :attr="field.attr" @fetchData="fetchData"></component>
        <slot></slot>
    </div>
</template>

<script>
  import components from './attr/components'

  export default {
    name: 'hx-attr-wrapper',
    props: {
      field: {
        type: Object,
        index: Number,
        attr: Object
      },
    },
    methods: {
      componentName(){

      },
      fetchData(data){
        this.$emit('getData', data)
      }
    },
    components
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @require './formEdit.styl'
</style>
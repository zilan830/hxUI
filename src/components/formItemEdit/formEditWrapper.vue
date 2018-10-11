<template>
    <div class="form-list-container">
        <component :is="field.type"></component>
        <slot></slot>
    </div>
</template>

<script>
    import components from './fileds/components'

    export default {
      name:'form-edit-wrapper',
      props:{
        field:{
          type:Object
        }
      },
      methods:{
        componentName(){

        }
      },
      components
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @require './formEdit.styl'
</style>
<template>
    <div class="form-list-container">
        <component :is="field.type" :index="field.index" :attr="field.attr" @remove="remove"></component>
        <slot></slot>
    </div>
</template>

<script>
    import components from './fileds/components'

    export default {
      name:'form-edit-wrapper',
      props:{
        field:{
          type: Object,
          index: Number,
          attr: Object
        }
      },
      methods:{
        remove(index){
          this.$emit('remove',index)
        }
      },
      components
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @require './formEdit.styl'
</style>
<template>
        <component :is="componentName" v-bind="propsValue" v-on="eventHandle"></component>
</template>

<script>
  export default{
    name: 'hx-item-component',
    props: {
      type: String,
      props: Object,
      events: Object
    },
    data(){
      return {}
    },
    computed:{
      componentName(){
        let type = '';
        if(this.type){
          type = this.type
        }else{
          type = 'hx-cell'
        }
        return type
      },
      propsValue(){
        return this.props
      },
      eventHandle(){
        return this.events
      }
    },
    methods: {},
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @require '~cube-ui/src/common/stylus/variable.styl';


</style>
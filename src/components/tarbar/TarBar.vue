<template>
    <cube-tab-bar
            v-model="tabColumn.selectedLabelDefault"
            :data="tabColumn.tabs"
            @click="clickHandler"
            @change="changeHandler">
    </cube-tab-bar>
</template>

<script>
  export default {
    name:'hx-tarbar',
    props:['tabColumn'],
    data() {
      return {

      }
    },
    methods: {
      clickHandler(label) {
        const tabs = [...this.tabColumn.tabs];
        for(const item of tabs){
          if(item.label === label){
            this.$router.push(item.path);
            break;
          }
        }
      },
      changeHandler(label) {
        // if you clicked different tab, this methods can be emitted
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>


<template>
    <inner-window title="Form Components">
        <template slot="doc">
            <div class="component-container">
                <div class="component-lists">
                    <p class="component-header">组件选择</p>
                    <div class="component-select">
                        <el-button class="component-item" @click="handleAdd('input-edit')">
                            <i class="iconfont icon-input"></i>
                        </el-button>
                    </div>
                </div>
                <div class="component-doc">
                    <p class="component-header">组件属性</p>
                    <form-attr-wrapper v-if="attrColumn.length > 0" :field="attrItem"
                                       @getData="getData"></form-attr-wrapper>
                </div>
            </div>
        </template>
        <template slot="mobile">
            <div v-for="(item, index) in formData" :key="index">
                <form-edit-wrapper :field="item"></form-edit-wrapper>
            </div>
        </template>
    </inner-window>
</template>

<script>
  import InnerWindow from './../innerWindow.vue'
  import FormAttrWrapper from "../../components/formItemEdit/formAttrWrapper";

  export default {
    components: {
      FormAttrWrapper,
      InnerWindow,
    },
    data(){
      return {
        formData: [],
        attrColumn: [],
        attrItem: {},
        componentIndex: 0,
      }
    },
    methods: {
      handleAdd(type){
        this.formData.push({type})
      },
      getData(data){
        this.attrColumn.push(data)
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    .component-container
        display: flex
        height: 100%
        .component-doc
        .component-lists
            display: flex
            flex-direction: column
            align-items: center
            margin: 10px 0
            .component-header
                margin: 10px 0
        .component-lists
            width: 100px
            border-right: 1px solid #e6e6e6
            overflow: hidden
            .component-select
                overflow: auto
                .component-item
                    width: 80px
                    height: 80px
                    border-radius: 5px
                    margin: 5px 0
                    cursor: pointer
                    > i
                        font-size: 45px
                        line-height: 80px
                        font-weight: bold
        .component-doc
            flex: 1


</style>
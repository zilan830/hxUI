<template>
    <div class="wrapper-container">
        <header class="header-container">
            <p class="header-text">组件文档说明</p>
        </header>
        <section class="content-container">
            <nav class="content-menu">
                <el-menu
                        default-active="1-1"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @select="handleSelect"
                >
                    <el-submenu v-for="item in hxMenu" :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <el-menu-item v-for="it in item.children" :index="it.index" :key="it.index">
                            {{it.name}}
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="cubeic-home"></i>
                        <span slot="title">Cube-UI</span>
                    </el-menu-item>
                </el-menu>
            </nav>
            <div class="content-inner-container">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
  import MobileIndex from './mobileIndex.vue'
  import HxMenu from './../util/menu/menu'
  import {deepClone} from './../util/globalMethod/clone'

  const HxMenuData = deepClone(HxMenu);

  export default {
    components: {
      MobileIndex
    },
    data () {
      return {
        hxMenu: HxMenuData
      }
    },
    methods: {
      handleOpen(){

      },
      handleSelect(index){
        const hxMenu = deepClone(HxMenu);
        if(index === '2'){
          window.open('https://didi.github.io/cube-ui/#/zh-CN/docs/button','_blank')
        }else{
          const ind = index.charAt(0);
          for(const item of hxMenu[ind-1].children){
            if(item.index === index){
              this.$router.push(item.path);
              break;
            }
          }
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .wrapper-container
        display: flex
        flex-direction: column
        height: 100%
        overflow: hidden
        .header-container
            height: 100px
            display: flex
            justify-content: center
            align-items: center
            background-color: #e6f2f2
            box-shadow: 0 2px 1px #ccc
            margin-bottom: 5px
            .header-text
                font-size: 20px
                letter-spacing: 5px
                color: #25262d
        .content-container
            display: flex
            flex-direction: row
            flex: 1
            overflow: hidden
            .content-menu
                width: 200px
                overflow: auto
                display: flex
                flex-direction: column
                .el-menu-vertical-demo.el-menu
                    height: 100%
            .content-inner-container
                display: flex
                overflow: hidden
                position: relative
                height: 100%
                width: 100%
                .content
                    overflow: auto
                    flex: 1
                .demo
                    width: 330px
                    height: 645px


</style>

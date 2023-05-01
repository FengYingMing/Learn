<template>
  <!-- 
  使用组件四步：
  1.创建组件，封装要复用的标签,样式,js代码
  2.引入组件 import from
  3.注册组件
    全局注册 - 在main.js中 Vue.component("组件名",组件对象)
    局部注册 - 某.vue文件内 
    export default{
      components:{
        "组件名":组件对象
      }
    }
  4.使用组件:组件名当成标签使用即可
  <组件名></组件名>
  5.定义组件名
    短横线命名 my-button
    驼峰命名 MyButton

 -->
  <div>
    <MyCom2></MyCom2>
  </div>
</template>
<script>
import MyCom2 from "./components/my-com2"
export default {
  components: {
    MyCom2,
  },
}
</script>
<style lang="less"></style>

<template>
  <!-- 
  dynamic 动态组件 - 是 可以改变的 组件
  动态组件可以解决什么需求？
   解决多组件同一位置，切换显示的需求
  基本语法：
   <component :is="要显示的组件">
 -->
  <div>
    <component :is="useCom"></component>
    <button @click="fn">切换</button>
  </div>
</template>
<script>
import MyCom6 from "./components/my-com6"
import MyCom7 from "./components/my-com7"
export default {
  data() {
    return {
      useCom: "MyCom6",
    }
  },
  components: {
    MyCom6,
    MyCom7,
  },
  methods: {
    fn() {
      this.useCom = "MyCom7"
    },
  },
}
</script>
<style lang="less" scoped></style>

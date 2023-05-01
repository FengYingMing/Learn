<template>
  <!-- 
   ref可以获取到组件实例
   可以直接获取到组件的this，从而获取组件的方法和数据
 -->
  <div>
    <my-com5 ref="one"></my-com5>
    <button @click="fn">按钮</button>
  </div>
</template>
<script>
import MyCom5 from "./components/my-com5"
export default {
  data() {
    return {}
  },
  methods: {
    fn() {
      // 相当于this.$refs.one的组件this
      const myOne = this.$refs.one
      console.log(myOne.msg)
      myOne.sing()
    },
  },
  components: {
    MyCom5,
  },
}
</script>
<style lang="less"></style>

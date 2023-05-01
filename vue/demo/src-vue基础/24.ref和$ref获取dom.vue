<template>
  <!-- 
   作用:利用ref和$refs 可以用于获取dom元素,或者组件实例
   1.给需要获取的 dom 元素或者组件, 添加 ref 属性
   2.通过 `this.$refs.xxx` 获取, 拿到组件可以调用组件的方法

   document获取dom和ref获取dom的区别在于
   1.document找的是整个document,不区分组件(作用范围广,容易影响其他组件)
   2.ref 和 $ref:找的是整个组件，有查找范围(当前组件)
 -->
  <div>
    <div ref="one">1</div>
    <div ref="two">2</div>
    <button @click="fn">打印</button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    fn() {
      console.log(this.$refs.one, this.$ref.two)
    },
  },
}
</script>
<style lang="less"></style>

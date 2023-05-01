<template>
  <!-- 
   子传父：
   
   1.父组件可以给子组件注册对应的自定义事件
   <MyCom1 @changePrice="changePrice">
   2.子组件可以通过this.$emit("事件名",参数1,参数2,....)触发父组件中定义的事件的同时去传参
   this.$emit('changePrice',3)
  -->
  <div>
    <div>{{ price }}-{{ title }}-{{ info }}</div>
    <button @click="fn">改价格</button>
  </div>
</template>
<script>
export default {
  // props中接收到的数据，和data一样，可以在模板或者methods等方法中使用
  // props遵循单向数据流,父组件传递过来的props值是只读的，不能去修改
  props: ["price", "title", "info"],
  methods: {
    fn() {
      this.$emit("changePrice", 2)
    },
  },
}
</script>
<style lang="less"></style>

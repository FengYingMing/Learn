<template>
  <!-- 
  通过父传子, 固然可以完成一定层面的组件的定制, 但是自定义性较差, 
  如果希望能够自定义组件内部的一些结构 => 就需要用到插槽
  默认插槽基本语法：
  1.组件内部使用<slot></slot>占位
  2.使用组件时<MyDialog></MyDialog>夹着的地方,传入标签替换slot
  3.如果没有为插槽提供内容,可以在插槽中提供默认内容<slot>默认内容</slot>
 -->
  <div>
    <my-com8>
      <div>1234</div>
    </my-com8>
    <my-com8> </my-com8>
  </div>
</template>
<script>
import MyCom8 from "./components/my-com8"
export default {
  components: {
    MyCom8,
  },
}
</script>
<style lang="less" scoped></style>

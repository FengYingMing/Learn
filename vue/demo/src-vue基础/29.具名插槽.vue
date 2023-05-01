<template>
  <!-- 
  具名插槽：
  可以自定义名字，通过name自定义名字，实现定向分发
  默认插槽的name叫default
  使用步骤：
  1.子组件给插槽起名字
  <slot name="header"><slot>
  2.父组件需要使用template标签,将内容包裹成一个整体
    通过v-slot:插槽名,指定具体分发给谁
    也可以简写为 #插槽名
    <son>
      <template v-slot="header">
        <div>内容</div>
      </template>  
    </son>
 -->
  <div>
    <my-com9>
      <template v-slot:header>
        <h1>头部</h1>
      </template>
      <template #main>
        <h2>中部</h2>
      </template>
      <template v-slot:footer>
        <h3>尾部</h3>
      </template>
      <h4>默认</h4>
    </my-com9>
  </div>
</template>
<script>
import MyCom9 from "./components/my-com9"
export default {
  components: {
    MyCom9,
  },
}
</script>
<style lang="less" scoped></style>

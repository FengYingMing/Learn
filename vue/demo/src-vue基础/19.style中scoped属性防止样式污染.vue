<template>
  <!-- 
  1.全局样式：默认组件中的样式会作用到全局
  2.局部样式：可以给组件加上scoped属性，让样式只作用于当前组件
  scoped原理:
  1.当前组件内标签都被添加data-v-hash值的属性
  2.css选择器都被添加[data-v-hash值]的属性选择器
 -->
  <div></div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped></style>

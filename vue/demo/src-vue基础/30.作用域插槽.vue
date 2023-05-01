<template>
  <!-- 
  作用域插槽,子组件在slot上提供属性值
  父组件在template上v-slot:xxx = "obj",拿到obj对象就是子组件传的值
  obj仅限在template内使用
 -->
  <div>
    <my-com9>
      <template v-slot:header="obj">
        <h1>头部</h1>
        <h2>{{ obj.a }}-{{ obj.b }}</h2>
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

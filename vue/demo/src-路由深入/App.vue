<template>
  <!-- 
    路由传值
    1.在router-link上的to属性传值,语法格式如下
      普通路由: /path?参数名=值&参数名=值
      动态路由: /path/值 - 需要路由对象提前配置path:"/path/:参数名"
    2.对应页面组件接收传递过来的值
      普通路由： $route.query.参数名  
      动态路由： $route.params.参数名
   -->
  <div>
    <!-- 声明式导航 -->
    <router-link to="/com1?name=皮皮&age=12">com1</router-link>
    <router-link to="/com2/123">com2</router-link>
    <router-link to="/com3">com3</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.router-link-active {
  color: red;
}
</style>

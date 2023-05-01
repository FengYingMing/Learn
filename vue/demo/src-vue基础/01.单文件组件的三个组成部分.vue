<template>
  <div>
    <!-- 
      v-text：设置标签内部值
     -->
    <li v-text="money"></li>

    <li>{{ money }}</li>
  </div>
</template>

<script>
// 1.vue通过data属性可以提供对象，data属性必须是一个函数
// 2.这个函数需要返回一个对象，这个对象就代表vue提供的数据
// 3.插值表达式不能写语句，设置属性不能用插值表达式
// 4.template中的在data中必须存在
export default {
  data() {
    return {
      money: 1000,
    }
  },
}
</script>

<style lang="less">
div {
  width: 300px;
  height: 300px;
  background-color: pink;
  li {
    color: lime;
  }
}
</style>

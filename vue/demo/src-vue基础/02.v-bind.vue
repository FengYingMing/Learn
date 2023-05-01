<template>
  <!-- 
    v-bind指令：动态设置html标签属性 
    语法：
     v-bind:标签属性名 = "变量"
    简写语法：
     :标签属性名 = "变量"

    属性写法注意项
    money="100" 给的是字符串
    :money="100" 给的是数字
    :money="'100'" 给的是字符串
  -->
  <div v-bind:class="money">111</div>
</template>

<script>
export default {
  data() {
    return {
      money: "money",
    }
  },
}
</script>

<style lang="less">
.money {
  width: 100px;
  height: 100px;
  background-color: pink;
}
</style>

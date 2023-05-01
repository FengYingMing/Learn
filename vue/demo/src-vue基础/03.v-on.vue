<template>
  <!-- 
    v-on指令：注册事件
    语法：
     1.v-on:事件名 = "要执行的少量代码"
     2.v-on:事件名 = "函数名"
     2.v-on:事件名 = "函数名(参数)"
    简写
      @事件名 = 
  -->
  <div>
    <div v-text="money"></div>
    <button v-on:click="money++">按钮1</button>
    <button v-on:click="fn1">按钮2</button>
    <button v-on:click="fn2(100)">按钮3</button>
    <button @click="fn2(200)">按钮4</button>
  </div>
</template>

<script>
export default {
  // data提供变量
  data() {
    return {
      // 这里提供的所以data属性值,都会被挂到vue实例上
      money: 111,
    }
  },
  // methods提供方法
  methods: {
    // methods所有方法中的this,指向当前vue实例
    fn1() {
      this.money--
    },
    fn2(num) {
      this.money = this.money + num
    },
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

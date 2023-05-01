<template>
  <!-- 
    vue获取事件对象：
    1.没有传参，通过形参接收e
    2.传参了，通过$event指代事件对象e
  -->
  <div>
    <div v-text="money"></div>
    <button v-on:click="fn1">按钮2</button>
    <button v-on:click="fn2(100, $event)">按钮3</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: 111,
    }
  },
  methods: {
    fn1(e) {
      console.log(e)
      this.money--
    },
    fn2(num, e) {
      console.log(e)
      this.money = this.money + num
    },
  },
}
</script>

<style lang="less"></style>

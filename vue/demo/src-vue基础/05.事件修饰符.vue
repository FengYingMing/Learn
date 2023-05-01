<template>
  <!-- 
    事件修饰符：
    @click.prevent 阻止默认行为
    @click.stop 阻止冒泡
    支持链式
    @click.prevent.stop
  -->
  <div>
    <a href="http://www.jd.com" @click.prevent="fn1">按钮2</a>
    <a href="http://www.jd.com" @click.prevent.stop="fn1">按钮3</a>
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
    fn1() {
      console.log("去京东了")
    },
  },
}
</script>

<style lang="less"></style>

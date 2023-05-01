<template>
  <!-- 
   vue异步更新dom
   第一个宏任务执行完，会看有没有微任务，有就执行微任务，浏览器更新渲染，再执行下一个宏任务
   vue内置$nextTick(回调)，会在本次dom更新后完成
 -->
  <div>
    <div ref="dv">{{ a }}</div>
    <button @click="fn">按钮</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 1,
    }
  },
  methods: {
    fn() {
      this.a++
      this.$nextTick(() => {
        console.log(this.$refs.dv.innerText)
      })
    },
  },
}
</script>
<style lang="less" scpoed></style>

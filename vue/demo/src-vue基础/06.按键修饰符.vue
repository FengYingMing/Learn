<template>
  <!-- 
    按键修饰符：
    @keyup.enter 监听回车键
    @keyup.esc 监听返回键 等等

    需求：
    用户输入内容,回车时,打印输入的内容
  -->
  <div>
    <input type="text" @keyup.enter="fn($event)" />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    fn(e) {
      console.log(e.target.value)
    },
  },
}
</script>

<style lang="less"></style>

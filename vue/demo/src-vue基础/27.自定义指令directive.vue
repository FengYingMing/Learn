<template>
  <div>
    <input type="text" v-focus v-border />
    <textarea v-red v-border="'5'"></textarea>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  directives: {
    focus: {
      // 当指令所在的元素节点,被插入到页面中触发,dom已经解析完成,可以操作dom
      inserted(el) {
        el.focus()
      },
    },
    red: {
      inserted(e) {
        e.style.color = "red"
      },
    },
  },
}
</script>
<style lang="less" scoped></style>

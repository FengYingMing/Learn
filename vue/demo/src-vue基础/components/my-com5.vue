<template>
  <div>我是子组件</div>
</template>
<script>
export default {
  data() {
    return {
      msg: "1",
    }
  },
  methods: {
    sing() {
      console.log("sing")
    },
  },
}
</script>
<style lang="less" scoped></style>

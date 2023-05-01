<template>
  <div>组件2</div>
</template>
<script>
export default {
  name: "MyCom2",
  created() {
    console.log(this.$route.params.id)
  },
}
</script>
<style lang="less" scoped></style>

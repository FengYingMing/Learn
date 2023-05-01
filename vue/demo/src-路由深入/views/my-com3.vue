<template>
  <div>组件3</div>
</template>
<script>
export default {
  name: "MyCom3",
  created() {
    console.log(this.$route.query)
    console.log(this.$route.params)
  },
}
</script>
<style lang="less" scoped></style>

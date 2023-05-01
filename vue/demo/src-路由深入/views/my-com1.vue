<template>
  <div>
    组件1
    <button @click="jump">按钮</button>
  </div>
</template>
<script>
export default {
  name: "MyCom1",
  created() {
    console.log(this.$route.query)
  },
  methods: {
    jump() {
      // 编程式导航三种语法

      // this.$router.push("/com3")

      //path带参数,需要通过query,会忽略配置的params

      // this.$router.push({
      //   path: "/com3",
      //   query: {
      //     name: "小红",
      //     age: 13,
      //   },
      // })
      this.$router.push({
        name: "com3",
        query: {
          name: "小红",
          age: 12,
        },
        params: {
          a: 1,
        },
      })
    },
  },
}
</script>
<style lang="less" scoped></style>

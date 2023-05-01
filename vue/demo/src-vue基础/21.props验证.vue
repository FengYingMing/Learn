<template>
  <div>
    <my-com2 :a="a" :b="b" :c="c" :f="f"></my-com2>
  </div>
</template>
<script>
import MyCom2 from "./components/my-com2"
export default {
  data() {
    return {
      a: 1,
      b: "2",
      c: 3,
      f: 300,
    }
  },
  components: {
    MyCom2,
  },
}
</script>
<style lang="less"></style>

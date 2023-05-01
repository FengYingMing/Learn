<template>
  <div>
    <slot name="header" :a="a" :b="b"></slot>
    <slot name="main"></slot>
    <slot name="footer"></slot>
    <slot name="default"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: "name",
      b: 123,
    }
  },
}
</script>
<style lang="less"></style>

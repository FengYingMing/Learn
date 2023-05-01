<template>
  <div>
    <button @click="fn('add')">+1</button>
    <span>{{ value }}</span>
    <button @click="fn('min')">-1</button>
  </div>
</template>
<script>
export default {
  props: {
    value: Number,
  },
  methods: {
    fn(type) {
      if (type === "add") {
        this.$emit("input", this.value + 1)
      }
      if (type === "min") {
        this.$emit("input", this.value - 1)
      }
    },
  },
}
</script>
<style lang="less" scoped></style>

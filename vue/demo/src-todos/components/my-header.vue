<template>
  <header class="header">
    <h1>todos</h1>
    <input
      v-model="value"
      @keyup.enter="add"
      class="new-todo"
      placeholder="请输入任务名称"
      autofocus
    />
  </header>
</template>
<script>
export default {
  data() {
    return {
      value: "",
    }
  },
  methods: {
    add() {
      if (!this.value.trim()) return
      this.$emit("add", {
        id: Symbol("id"),
        checked: false,
        value: this.value,
      })
      this.value = ""
    },
  },
}
</script>
<style lang="less"></style>

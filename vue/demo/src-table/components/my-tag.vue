<template>
  <div class="my-tag" @dblclick="handleClick">
    <input
      @blur="handleBlur"
      v-if="edit"
      class="input"
      type="text"
      placeholder="输入标签"
      ref="ipt"
      v-focus
      v-model="value2"
      @keyup.enter="handleKeyUp"
    />
    <div class="text" v-else>{{ value }}</div>
  </div>
</template>
<script>
export default {
  name: "MyTag",
  data() {
    return {
      edit: false,
      value2: "",
    }
  },
  methods: {
    handleClick() {
      this.edit = true
      // this.$nextTick(() => {
      //   this.$refs.ipt.focus()
      // })
      this.value2 = this.value
    },
    handleBlur() {
      if (!(this.value2 && this.value2.trim())) return

      this.edit = false
    },
    handleKeyUp() {
      if (!(this.value2 && this.value2.trim())) return
      this.$emit("input", this.value2)
      this.edit = false
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      },
    },
  },
  props: {
    value: {
      type: String,
    },
  },
}
</script>
<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>

<template>
  <!-- 
    v-model修饰符：
    .number 转数字,以parseFloat转成数字类型(不会强转)
    .trim 去除首尾空白字符
    .lazy 在change时触发而非input时

    input事件:实时修改时触发
    change事件:失去焦点或者回车触发
  -->
  <div>
    <input type="text" v-model.number="value1" />
    <input type="text" v-model.trim="value2" />
    <input type="text" v-model.lazy="value3" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 1,
      value2: "",
      value3: "1",
    }
  },
  methods: {},
}
</script>

<style lang="less"></style>

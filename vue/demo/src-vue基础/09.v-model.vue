<template>
  <!-- 
    v-model：给表单元素使用，双向数据绑定，设置控件的值
  -->
  <div>
    <input type="text" v-model="flag" />
    <input type="checkbox" v-model="flag2" />
    <select v-model="value">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: 1,
      flag2: true,
      value: "1",
    }
  },
  methods: {},
}
</script>

<style lang="less"></style>

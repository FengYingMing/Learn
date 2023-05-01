<template>
  <!-- 
    v-text:更新元素的innerText
    v-html:更新元素的innerHTML
  -->
  <div>
    <div v-text="value1"></div>
    <div v-html="value2"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "<h1>你好<h1>",
      value2: "<h1>你好<h1>",
    }
  },
  methods: {},
}
</script>

<style lang="less"></style>

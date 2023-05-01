<template>
  <!-- 
    v-for:可以遍历数据 或者 对象,用于渲染结构

    遍历数组
    v-for = "item in 数组名"
    v-for = "(item,index) in 数组名"

    遍历对象
    v-for = "(value,key) in 对象名"

    遍历数字
    v-for = "item in 数字" key设置为item即可
  -->
  <ul>
    <li v-for="item in arr1" :key="item">{{ item }}</li>
    <li v-for="(item, index) in arr2" :key="item">{{ item }}-{{ index }}</li>
    <li v-for="item in arr3" :key="item">{{ item }}</li>
    <li v-for="(value, key) in obj" :key="key">{{ value }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      arr1: [1, 2, 3],
      arr2: [4, 5, 6],
      arr3: 10,
      obj: {
        a: "aa",
        b: "bb",
      },
    }
  },
  methods: {},
}
</script>

<style lang="less"></style>

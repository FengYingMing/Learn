<template>
  <!-- 
    v-if = "布尔值1"
    v-else-if = "布尔值2"
    v-else
    上下标签需要连着写，中间不能有其他标签
  -->
  <div>
    <div v-if="flag === 1">1</div>
    <div v-else-if="flag === 2">2</div>
    <div v-else>3</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: 1,
    }
  },
  methods: {},
}
</script>

<style lang="less"></style>

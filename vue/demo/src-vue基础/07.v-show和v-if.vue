<template>
  <!-- 
    1.v-show
     语法： v-show="布尔值" (true显示,false隐藏)
     原理: 实质是在控制元素的css样式,display:none
     场景：频繁切换使用

    2.v-if
     语法： v-if="布尔值" (true显示,false隐藏)
     原理: 实质是在动态的创建或者删除元素节点
     场景：默认显示或者隐藏的场景
      
  -->
  <div>
    <button v-show="true">1</button>
    <button v-if="false">2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less"></style>

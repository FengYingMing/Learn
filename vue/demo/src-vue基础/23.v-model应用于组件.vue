<template>
  <!-- 
   我们经常遇到一种场景： 
   1. 父组件只提供 一个数据 给子组件使用（父传子）
   2. 子组件又需要修改父组件传过来的这个数据，所以需要子传父把值传给父组件。
   这种场景可以使用v-model进行简写。
   v-model = :value + @input
   要求：子组件触发事件必须要用 "input" 作为第一个参数
         子组件必须要用 value 接收父组件参数

  v-model配合computed的set有说法的，详情见todos my-main组件中的set
 -->
  <div>
    <!-- <my-com4 :value="value" @input="handleChange"></my-com4> -->
    <my-com4 v-model="value"></my-com4>
  </div>
</template>
<script>
import MyCom4 from "./components/my-com4"
export default {
  data() {
    return {
      value: 10,
    }
  },
  components: {
    MyCom4,
  },
  methods: {
    handleChange(value) {
      this.value = value
    },
  },
}
</script>
<style lang="less"></style>

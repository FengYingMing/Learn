<template>
  <!-- 
  父传子语法：
  1.父组件通过给子组件加属性传值
  <Son price="100" title="不错" :info="msg">
  2.子组件中,通过props属性接收
  props:["price","title","info"]
 -->
  <div>
    <MyCom1 @changePrice="fn" :price="b" title="不错" :info="a" />
  </div>
</template>
<script>
import MyCom1 from "./components/my-com1"
export default {
  components: {
    MyCom1,
  },
  data() {
    return {
      a: 1,
      b: 100,
    }
  },
  methods: {
    fn(value) {
      this.b = value
    },
  },
}
</script>
<style lang="less"></style>

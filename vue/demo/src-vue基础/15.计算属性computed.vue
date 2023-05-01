<template>
  <!-- 
    计算属性：一个特殊属性,值依赖于另外一些数据动态计算出来的
    1.计算属性必须定义在computed节点中
    2.计算属性必须是一个function,计算属性必须有返回值
    3.计算属性不能被当做方法调用，要作为属性来用
    4.计算属性像比较函数来说性能高很多，因为是基于依赖项的值进行缓存，依赖的变量不变，都直接从缓存取结果
    computed:{
      "计算属性名"(){
        return 值
      }
    }
  -->
  <div>
    <input type="text" v-model.number="data1" />
    <input type="text" v-model.number="data2" />
    <div>{{ sum }}</div>
  </div>
</template>

<script>
export default {
  // 组件配置项，第一层只有data是函数，其他都是对象(methods,computed...)
  //methods => 内部各种函数
  //computed => 内部,各种函数，且每个函数都要有返回值
  data() {
    return {
      data1: 0,
      data2: 0,
    }
  },
  computed: {
    sum() {
      return this.data1 + this.data2
    },
  },
}
</script>

<style lang="less"></style>

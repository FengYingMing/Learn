<template>
  <!-- 
    侦听器 watch
    watch:可以侦听到data/computed属性值的改变
    语法:
     watch:{
      "被侦听的属性名"(newVal,oldVal){

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
  data() {
    return {
      data1: 0,
      data2: 0,
      data3: {
        name: "pp",
      },
    }
  },
  computed: {
    sum() {
      return this.data1 + this.data2
    },
  },
  watch: {
    // 1.监视计算属性
    sum(newVal, oldVal) {
      this.data3.name = "aa"
      console.log(newVal, oldVal)
    },
    // 2.监视对象中某个简单属性
    "data3.name"(newVal, oldVal) {
      console.log(newVal, oldVal)
    },
    // 3.监视整个复杂类型对象=>复杂类型中的任何一个属性变化了，都要执行
    // 需要深度监视，需要些监视的完整写法
    data3: {
      immediate: true, //立即执行，是否一进入页面，就先执行一次handler函数
      deep: true, //深度监视
      // handler固定处理函数
      handler(newVal) {
        //对于复杂类型的监视，oldVal和newVal指向的是同个对象
        console.log(newVal)
      },
    },
  },
}
</script>

<style lang="less"></style>

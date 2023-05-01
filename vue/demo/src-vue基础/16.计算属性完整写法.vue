<template>
  <!-- 
    计算属性：
    1.计算属性默认情况下只能获取,不能修改
    2.要给计算属性赋值，就必须写计算属性的完整写法
    computed:{
      "计算属性名":{
        get(){

        },
        set(value){
         //其他地方通过this[计算属性名]改值，可以拿到要改的值，通过要改的值去改依赖项，再去更新计算属性值
        }
      }
    }
  -->
  <div>
    <input type="text" v-model.number="data1" />
    <input type="text" v-model.number="data2" />
    <button @click="changeValue">强行改</button>
    <div>{{ sum }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: 0,
      data2: 0,
    }
  },
  methods: {
    changeValue() {
      this.sum = 4
    },
  },
  computed: {
    sum: {
      get() {
        return this.data1 + "-" + this.data2
      },
      set(value) {
        this.data1 = value
        this.data2 = 0
      },
    },
  },
}
</script>

<style lang="less"></style>

<template>
  <!-- 
    props校验:
    默认的数组形式，不会进行校验，如果希望校验，需要提供对象形式的props
    props:{
      .....
    }
    props提供了多种数据验证方案,例如:
    1.基础的类型检查 Number
    2.多个可能的类型[String,Number]
    3.必填项校验 required:true
    4.默认值default:100
    5.自定义验证函数
 -->
  <div>
    <div>{{ a }}</div>
    <div>{{ b }}</div>
    <div>{{ c }}</div>
    <div>{{ d }}</div>
    <div>{{ e.name }}</div>
    <div>{{ f }}</div>
    <div>{{ g[0] }}</div>
  </div>
</template>
<script>
export default {
  props: {
    // 1.基础类型检查 Number String Boolean Obejct Array Function....
    a: Number,
    // 2.支持多种类型
    b: [Number, String],
    // 3.必填
    c: {
      required: true,
    },
    // 4.默认
    d: {
      type: [String, Number],
      default: "ss",
    },
    // 5.如果是复杂类型，比如对象，数组，默认值需要函数返回值提供
    e: {
      type: Object,
      default() {
        return {
          name: "小红",
        }
      },
    },
    g: {
      type: Array,
      default() {
        return [1, 2]
      },
    },
    // 6.自定义验证函数,内部逻辑自己提供，return true通过 flase不通过
    f: {
      validator(value) {
        return value == 300
      },
    },
  },
}
</script>
<style lang="less"></style>

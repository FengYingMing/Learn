<template>
  <!-- 
  v-model:提供数据和表单元素的双向绑定
  数据发生变化，通过 v-bind:value更新视图
  页面输入变化，通过 v-on:事件更新数据
 -->

  <!-- 
  1. :value和@input的组合(默认清空)
  <input type="text" v-model="msg" />
  <input type="text" :value="msg" @input="msg=..." />

  2. :value和@change的组合(默认清空)
  <input type="text" v-model.lazy="msg" />
  <input type="text" :value="msg" @change="msg=..." />

  3. :checked 和 @change 的组合
  <input type="checkbox" v-model="flag">
  <input type="checkbox" :checked="flag" @change="flag=....">
  -->

  <!-- 
    $event可以获取事件的形参,因为是原生input事件,所以形参才是事件对象
   -->
  <div>
    <input type="text" :value="msg" @input="msg = $event.target.value" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
    }
  },
}
</script>
<style lang="less"></style>

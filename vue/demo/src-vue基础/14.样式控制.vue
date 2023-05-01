<template>
  <!-- 
    vue控制样式
    :class="值或对象或数组" --class控制
    :style="值或对象或数组" --行内控制
    1.传对象:class="obj"
      {键:值,键:值} 如果值是true,就会有这个类,类名就是对象的键
    
    2.:class="arr"
      适合批量添加类
  -->
  <div>
    <div :class="obj"></div>
    <div :class="arr"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        wd: true,
        pink: true,
      },
      arr: ["wd", "pink"],
    }
  },
  methods: {},
}
</script>

<style lang="less">
.wd {
  width: 100px;
  height: 100px;
  background-color: pink;
}
.pink {
}
</style>

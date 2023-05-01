<template>
  <!-- 
     vue生命周期:是Vue组件实例,从创建到销毁的全过程
     
     生命周期函数：是由Vue框架提供的内置函数，会伴随组件的生命周期，自动按次序执行
     
     生命周期分为几大阶段:
     1.初始化阶段(准备数据+dom渲染)
     2.运行阶段
     3.组件销毁阶段

     生命周期流程：
     1.new Vue()：
       构建vue实例(每个组件都是可复用的vue实例) 
       将来可以往Vue.prototype.xxx上挂载一些通过的属性或方法,将来供所有的组件使用
     2.init Event&Lifecycle:
       初始化基础事件,初始化生命周期
     3.beforeCreate:
       data数据还没有初始化完成,此时vue实例上还没有绑定数据
     4.init injections & reactivity：
       初始化数据
       数据是写在data()中,return出来的数据,必然在这个阶段,执行了data函数,得到数据源，
       将数据源挂到vue实例上,将来才能通过this.xxx访问
       这一步还会将数据处理成响应式(对于数据变化做监听)
       Vue2:Object.defineProperty 
       Vue3:proxy
     5.created:
       data数据初始化完成,此时vue实例上绑定好数据了
       可以发请求，获取后台数据，更新组件数据
     6.模板编译，把data对象里面的数据和vue语法写的模板编译成HTML
     7.beforeMount:
       页面结构还没有解析完成，此时无法获取dom
     8.Create vm.$el and replave el with it:
       结合数据,结合模板,生成结构,将页面的视图元素进行替换展示
     9.mounted:
       页面结构已经解析渲染完成,此时可以获取到dom
     10.数据发生变化
     11.beforeUpdate:
        dom还没有更新出来
     12.Virtual DOM re-render and patch当主线程代码执行完毕,积累了一定的更新,基于新的数据,生成新的虚拟dom,
        用新的虚拟dom和旧的虚拟dom对比出差异,进行差异化更新
     13.updated：
        dom已经更新完成了
     14.beforeDestory:
        组件即将销毁前
     15.自动释放侦听器监听 子组件 事件监听...
        将vue中绑定的一些资源释放掉
     16.destoryed:
        组件销毁完成
        有些不是vue内置的功能,有时需要手动释放(定时器,延时器,服务器资源) 

   -->
  <div></div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style lang="less" scpoed></style>

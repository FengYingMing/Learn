import Vue from "vue"
import App from "./App.vue"
import MyButton from "./components/my-button.vue"
// 注册全局组件
// 组件中的name与第一个参数要一致
Vue.component(MyButton.name, MyButton)

// 注册全局指令
Vue.directive("border", {
  inserted(el, binding) {
    el.style.border = `3px solid ${binding.value}`
  },
  update(el, binding) {
    el.style.border = `3px solid ${binding.value}`
  },
})

Vue.config.productionTip = false

// 创建vue根实例，利用创建出来的根实例，渲染index.html的盒子
new Vue({
  // 使用App组件进行渲染
  render: (h) => h(App),
}).$mount("#app")

// $mount('#app') => 挂载：得到结构后，渲染index.html中id为app的盒子

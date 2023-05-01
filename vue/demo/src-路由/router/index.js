// 1.下载vue-router模块到当前工程，版本3.5.3
// 2.在main.js中引入VueRouter函数
// 3.添加到Vue.use()身上-帮你注册全局RouterLink
// 4.创建路由对象
// 5.将路由对象注入到new Vue实例中

// 两个核心步骤
// 1.配置路由规则:路径和组件的对应
// 2.指定路由出口:router-view挖个坑

// @指代src
import MyFind from "@/views/find.vue"
import MyMy from "@/views/my.vue"
import MyPart from "@/views/part.vue"
import VueRouter from "vue-router"
import Vue from "vue"
Vue.use(VueRouter)
const routes = [
  //   模糊匹配会加上类：to="/a" 可以匹配 /a , /a/b
  //   router-link-active

  //  精确匹配会加上类：to="/a" 只能匹配 /a
  //   router-link-exact-active
  { path: "/find", component: MyFind },
  { path: "/my", component: MyMy },
  { path: "/part", component: MyPart },
]
const router = new VueRouter({
  routes,
  // 可以修改默认高亮的类名
  // linkActiveClass: "aa",
  // linkExactActiveClass: "aa",
})
export default router

import Vue from "vue"
import VueRouter from "vue-router"
import MyCom1 from "@/views/my-com1"
import MyCom2 from "@/views/my-com2"
import MyCom3 from "@/views/my-com3"
import NotFound from "@/views/not-found"
Vue.use(VueRouter)
const router = new VueRouter({
  // 默认是hash,可改为history去锚点
  mode: "history",
  routes: [
    // 路由重定向，redirect
    { path: "/", redirect: "/com1" },
    { path: "/com1", component: MyCom1 },
    { path: "/com2/:id", component: MyCom2 },
    { path: "/com3", component: MyCom3, name: "com3" },
    // * 表示所有路由都能匹配到,所以要放到最后
    {
      path: "*",
      component: NotFound,
    },
  ],
})
export default router

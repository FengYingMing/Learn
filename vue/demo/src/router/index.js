import Vue from "vue"
import VueRouter from "vue-router"
import LayOut from "@/views/layout"
import Article from "@/views/article"
import ArticleDetail from "@/views/article-detail"
import Collect from "@/views/collect"
import Like from "@/views/like"
import User from "@/views/user"
Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: LayOut,
      redirect: "/article",
      children: [
        { path: "/article", component: Article },
        { path: "/collect", component: Collect },
        { path: "/like", component: Like },
        { path: "/user", component: User },
      ],
    },
    {
      path: "/article-detail/:id",
      component: ArticleDetail,
    },
  ],
})

export default router

<template>
  <section class="todoapp">
    <!-- 头部部分 -->
    <my-header @add="add"></my-header>
    <!-- 主体部分 -->
    <my-main
      @changeChecked="changeChecked"
      :list="showList"
      @del="del"
      @setAll="setAll"
    ></my-main>
    <!-- 底部部分 -->
    <my-footer
      @changeType="changeType"
      :type="type"
      @clear="clearC"
      :list="list"
    ></my-footer>
  </section>
</template>

<script>
import MyFooter from "./components/my-footer"
import MyHeader from "./components/my-header"
import MyMain from "./components/my-main"
export default {
  components: {
    MyFooter,
    MyHeader,
    MyMain,
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem("list")) || [
        { id: 1, checked: true, value: "吃饭" },
        { id: 2, checked: false, value: "睡觉" },
        { id: 3, checked: true, value: "打豆豆" },
      ],
      type: "all",
    }
  },
  methods: {
    del(id) {
      this.list = this.list.filter((v) => v.id !== id)
    },
    add(value) {
      this.list.unshift(value)
    },
    changeChecked(id, value) {
      const obj = this.list.find((v) => v.id === id)
      obj.checked = value
    },
    clearC() {
      this.list = this.list.filter((v) => !v.checked)
    },
    changeType(type) {
      this.type = type
    },
    setAll(value) {
      this.list.forEach((v) => {
        v.checked = value
      })
    },
  },
  computed: {
    showList() {
      // if (this.type === "all") {
      //   return this.list
      // }else if(this.type === "actived"){
      //   return this.list.filter(v=>v.checked)
      // }else{
      //   return this.list.filter(v=>!v.checked)
      // }
      switch (this.type) {
        case "all":
          return this.list
        case "actived":
          return this.list.filter((v) => !v.checked)
        case "completed":
          return this.list.filter((v) => v.checked)
        default:
          return this.list
      }
    },
  },
  watch: {
    list: {
      deep: true,
      handler(newValue) {
        localStorage.setItem("list", JSON.stringify(newValue))
      },
    },
  },
}
</script>

<style></style>

<template>
  <footer class="footer" v-if="list.length > 0">
    <span class="todo-count"
      ><strong>{{ remain }}</strong
      >剩余</span
    >
    <ul class="filters">
      <li>
        <a
          @click="setType('all')"
          :class="{ selected: type === 'all' }"
          href="#/"
          >全部</a
        >
      </li>
      <li>
        <a
          @click="setType('actived')"
          :class="{ selected: type === 'actived' }"
          href="#/active"
          >进行中</a
        >
      </li>
      <li>
        <a
          @click="setType('completed')"
          :class="{ selected: type === 'completed' }"
          href="#/completed"
          >已完成</a
        >
      </li>
    </ul>
    <button @click="clearC" v-if="clearCompleted" class="clear-completed">
      清除已完成
    </button>
  </footer>
</template>
<script>
export default {
  props: {
    list: Array,
    type: String,
  },
  computed: {
    remain: {
      get() {
        return this.list.filter((v) => !v.checked).length
      },
    },
    clearCompleted() {
      return this.list.some((v) => v.checked)
    },
  },
  methods: {
    clearC() {
      this.$emit("clear")
    },
    setType(type) {
      this.$emit("changeType", type)
    },
  },
}
</script>
<style lang="less"></style>

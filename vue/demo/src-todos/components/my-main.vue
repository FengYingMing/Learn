<template>
  <section class="main">
    <input v-model="isAll" id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li
        v-for="item in list"
        :key="item.id"
        :class="{ completed: item.checked }"
      >
        <div class="view">
          <!-- 
            这里v-model修改了父组件的传值，违反单向数据流
            所以需要将v-model拆解为 :checked + @change
          -->
          <input
            :checked="item.checked"
            @change="handleChange(item.id, $event)"
            class="toggle"
            type="checkbox"
          />
          <label>{{ item.value }}</label>
          <button class="destroy" @click="del(item.id)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      // required: true,
      default() {
        return []
      },
    },
  },
  computed: {
    isAll: {
      get() {
        return this.list.every((v) => v.checked)
      },
      set(value) {
        this.$emit("setAll", value)
      },
    },
  },
  methods: {
    del(id) {
      this.$emit("del", id)
    },
    handleChange(id, e) {
      console.log(id, e)
      this.$emit("changeChecked", id, e.target.checked)
    },
  },
}
</script>
<style lang="less"></style>

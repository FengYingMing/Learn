<template>
  <div class="table-case">
    <table class="my-table">
      <thead>
        <slot name="header"></slot>
      </thead>
      <tbody>
        <tr v-for="v in goods" :key="v.id">
          <slot
            name="body"
            :id="v.id"
            :picture="v.picture"
            :myname="v.name"
            :tag="v"
          ></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "MyTable",
  props: {
    goods: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
<style lang="less" scpoed>
.table-case {
  width: 1000px;
  margin: 50px auto;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
  }
}

.my-table {
  width: 100%;
  border-spacing: 0;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
  }
  th {
    background: #f5f5f5;
    border-bottom: 2px solid #069;
  }
  td {
    border-bottom: 1px dashed #ccc;
  }
  td,
  th {
    text-align: center;
    padding: 10px;
    transition: all 0.5s;
    &.red {
      color: red;
    }
  }
  .none {
    height: 100px;
    line-height: 100px;
    color: #999;
  }
}

.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>

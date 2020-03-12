<template>
  <li class="list-item">
    <span class="item-title">{{ item.name }}</span>
    <div class="actions">
      <span class="button check" v-if="!isCompletedList" @click="$emit('mark-task-done', item.id)">
        <img src="@/assets/check.svg" alt="check" />
      </span>
      <span class="button delete" @click="$emit('remove-task', item.id)">
        <img src="@/assets/close.svg" alt="close" />
      </span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    isCompletedList: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  list-style: none;
  border-bottom: 1px solid #e2e0e0;
  border-right: 1px solid #e2e0e0;
  border-left: 1px solid #e2e0e0;
  padding: 15px;
  .item-title {
    line-height: 25px;
    color: #676666;
    min-width: 300px;
  }
  &:first-child {
    border-top: 1px solid #e2e0e0;
    border-radius: 4px 4px 0 0;
  }
  &:last-child {
    border-radius: 0 0 4px 4px;
  }
  .actions {
    display: flex;
    margin-left: 10px;
    .button {
      width: 25px;
      height: 25px;
      margin: 0 3px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
      img {
        width: 11px;
      }
      &.check {
        background-color: #5bb75f;
      }
      &.delete {
        background-color: #da5146;
      }
    }
  }
}
</style>

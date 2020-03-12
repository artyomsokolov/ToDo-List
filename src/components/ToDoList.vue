<template>
  <div>
    <transition-group name="fade" tag="ul" class="list" v-if="list.length">
      <list-item
        v-for="item in list"
        :key="item.id"
        :item="item"
        :is-completed-list="isCompletedList"
        @mark-task-done="$emit('mark-task-done', $event)"
        @remove-task="$emit('remove-task', $event)"
      />
    </transition-group>
    <h3 v-else>
      No data for show
    </h3>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem'

export default {
  name: 'ToDoList',
  components: {
    ListItem
  },
  props: {
    list: {
      type: Array,
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
.list {
  width: 100%;
  list-style: none;
  padding-left: 0;
  border-radius: 4px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
</style>

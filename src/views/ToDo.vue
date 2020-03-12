<template>
  <div class="to-do">
    <h2 class="title">To do:</h2>
    <div class="lists-container">
      <div class="todo-list">
        <h3>Task List</h3>
        <to-do-list
          :list="toDoList"
          @mark-task-done="markTaskDone"
          @remove-task="removeTask"
        />
        <div class="add-task">
          <div class="input-container">
            <label for="new-task">Task</label>
            <input
              v-model="newTask"
              id="new-task"
              type="text"
              placeholder="What do you need to do?"
            />
          </div>
          <button class="save-item" @click="addNewTaskHandler">
            Save Item
          </button>
        </div>
      </div>
      <div class="completed-list" v-if="completedTaskList.length">
        <h3>Completed Tasks</h3>
        <to-do-list
          :is-completed-list="true"
          :list="completedTaskList"
          @remove-task="removeFromCompletedList"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ToDoList from '@/components/ToDoList'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ToDo',
  components: {
    ToDoList
  },
  data() {
    return {
      newTask: ''
    }
  },
  computed: {
    ...mapState(['toDoList', 'completedTaskList'])
  },
  methods: {
    ...mapMutations([
      'addTask',
      'removeTask',
      'markTaskDone',
      'removeFromCompletedList'
    ]),
    addNewTaskHandler() {
      const trimedStr = this.newTask.trim()
      if (trimedStr) {
        this.addTask(this.newTask)
        this.newTask = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.to-do {
  border: 1px solid #e2e0e0;
  background-color: #f5f5f5;
  border-radius: 4px;
  width: 100%;
  margin: 50px auto;
  padding: 20px;
  .lists-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .title {
    margin: 0;
    font-size: 34px;
    color: #294351;
  }
  .add-task {
    margin-top: 50px;
    .input-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      label {
        padding: 0 20px;
        font-weight: bold;
      }
      input {
        flex-grow: 1;
        padding: 7px;
        border-radius: 4px;
        border: 1px solid #e2e0e0;
        font-size: 15px;
        color: #676666;
      }
      ::-webkit-input-placeholder {
        color: #676666;
      }
      :-ms-input-placeholder {
        color: #676666;
      }
      ::placeholder {
        color: #676666;
      }
    }
    .save-item {
      margin-top: 25px;
      margin-left: auto;
      display: block;
      padding: 9px;
      background: #327ab7;
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>

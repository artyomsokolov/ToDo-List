import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toDoList: [
      { id: 1, name: 'Wake Up' },
      { id: 2, name: 'Wake Up 1' },
      { id: 3, name: 'Wake Up 2' },
      { id: 4, name: 'Wake Up 3' },
      { id: 5, name: 'Wake Up 4' },
      { id: 6, name: 'Wake Up 4' }
    ],
    completedTaskList: [{ id: 7, name: 'Test' }]
  },
  mutations: {
    addTask(state, taskName) {
      const id = btoa(Math.random()).substring(0, 12)
      const task = { id, name: taskName }
      Vue.set(state.toDoList, state.toDoList.length++, task)
    },
    removeTask(state, id) {
      const index = state.toDoList.findIndex(item => item.id === id)
      Vue.delete(state.toDoList, index)
    },
    markTaskDone(state, id) {
      const { completedTaskList, toDoList } = state

      const index = toDoList.findIndex(item => item.id === id)
      Vue.set(completedTaskList, completedTaskList.length++, toDoList[index])
      Vue.delete(toDoList, index)
    },
    removeFromCompletedList(state, id) {
      const index = state.completedTaskList.findIndex(item => item.id === id)
      Vue.delete(state.completedTaskList, index)
    }
  }
})

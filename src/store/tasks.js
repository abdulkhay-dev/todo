import {defineStore} from 'pinia'

function saveData(data) {
  localStorage.setItem('tasks', JSON.stringify(data))
}

function getData() {
  return JSON.parse(localStorage.getItem('tasks'))
}

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: getData() ?? [],
    show: 'all'
  }),
  getters: {
    getTasks: (state) => {
      if (state.show === 'all') return state.tasks
      if (state.show === 'active') return state.tasks.filter(task => !task.completed)
      if (state.show === 'completed') return state.tasks.filter(task => task.completed)
    }
  },
  actions: {
    filterTasks(filter) {
      this.show = filter
    },
    add(task_name) {
      let id = this.tasks.length === 0 ? 1 : this.tasks[0].id + 1
      this.tasks.unshift({
        id: id,
        name: task_name,
        completed: false
      })
      saveData(this.tasks)
    },
    remove(task_id) {
      this.tasks = [...this.tasks.filter(task => task_id !== task.id)]
      saveData(this.tasks)
    },
    completed(task_id, completed) {
      this.tasks = this.tasks.map(task => {
        if (task.id !== task_id) return task
        task.completed = completed
        return task
      })
      saveData(this.tasks)
    }
  }
})
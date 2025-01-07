<script setup>
import Tasks from "../task/Tasks.vue"
import Filter from "../task/Filter.vue"
import TaskAdd from "../task/Add.vue"
import {useTasksStore} from '../../store/tasks.js'
import {computed, ref} from "vue"
const taskStore = useTasksStore()
const tasks = computed(() => taskStore.getTasks)
function filterTasks(filter) {
  taskStore.filterTasks(filter)
}
</script>

<template>
  <section class="main">
    <h1>Todo</h1>
    <TaskAdd />
    <div class="task--list">
      <Tasks :tasks="tasks" />
      <Filter :task-count="tasks.length" @filter:task="filterTasks" />
    </div>
  </section>
</template>
<script setup>
import {useTasksStore} from "../../store/tasks.js"
const {add} = useTasksStore()
function addTask($event) {
  if ($event.target.value !== '') {
    add($event.target.value)
    $event.target.value = ''
  }
}
</script>

<template>
  <div class="task--add">
    <input type="text" placeholder="Enter task" @keyup.enter="addTask">
  </div>
</template>
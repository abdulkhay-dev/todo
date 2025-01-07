<script setup>
import {defineProps} from 'vue'
import {useTasksStore} from "../../store/tasks.js"
const {task} = defineProps(['task'])
const {remove, completed} = useTasksStore()
function removeTask() {
  remove(task.id)
}
function completedTask($event) {
  completed(task.id, $event.target.checked)
}
</script>

<template>
  <li :class="{'done' : task.completed}">
    <div>
      <input type="checkbox" :checked="task.completed" @change="completedTask" :true-value="true" :false-value="false" />
      <p>{{task.name}}</p>
    </div>
    <button @click="removeTask" type="button">
      <img src="../../assets/close.svg">
    </button>
  </li>
</template>
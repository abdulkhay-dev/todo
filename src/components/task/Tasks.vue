<script setup>
import {computed, defineProps} from 'vue'
import Task from './Task.vue'
defineProps(['tasks'])
</script>

<template>
  <TransitionGroup name="list" tag="ul">
    <Task v-for="task in tasks" :key="task.id" :task="task" />
  </TransitionGroup>
</template>
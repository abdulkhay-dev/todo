<script setup>
import Tasks from "../task/Tasks.vue"
import Filter from "../task/Filter.vue"
import TaskAdd from "../task/Add.vue"
</script>

<template>
  <section class="main">
    <h1>Todo</h1>
    <TaskAdd />
    <div class="task--list">
      <Tasks />
      <Filter />
    </div>
  </section>
</template>
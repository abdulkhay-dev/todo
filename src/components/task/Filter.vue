<script setup>
import {defineProps, defineEmits, ref} from 'vue'
defineProps(['taskCount'])
const emit = defineEmits(['filter:task'])
const active = ref('all')
function filterTask (filter) {
  emit('filter:task', filter)
  active.value = filter
}
</script>

<template>
  <div class="task--filter">
    <p>{{taskCount}} tasks</p>
    <ul>
      <li :class="{active: active === 'all' ? true : false}" @click="filterTask('all')">All</li>
      <li :class="{active: active === 'active' ? true : false}" @click="filterTask('active')">Active</li>
      <li :class="{active: active === 'completed' ? true : false}" @click="filterTask('completed')">Completed</li>
    </ul>
    <p></p>
  </div>
</template>
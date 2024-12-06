<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import ToDoForm from '../components/ToDoForm.vue'
import ToDoList from '../components/ToDoList.vue'

const todos = ref([])
const name = ref('')

const todos_asc = computed(() =>
  todos.value.sort((a, b) => {
    return a.createdAt - b.createdAt
  }),
)

watch(
  todos,
  (newVal) => {
    localStorage.setItem('todos', JSON.stringify(newVal))
  },
  { deep: true },
)

watch(name, (newVal) => {
  localStorage.setItem('name', newVal)
})

onMounted(() => {
  name.value = localStorage.getItem('name') || ''
  todos.value = JSON.parse(localStorage.getItem('todos')) || []
})

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos.value))
}

const addTodo = (newTodo) => {
  todos.value.push(newTodo)
  saveTodos()
}

const removeTodo = (index) => {
  todos.value.splice(index, 1)
  saveTodos()
}
</script>

<template>
  <div class="container">
    <ToDoList :items="todos" :is-done-filter="true" color="#28a745" />
  </div>
</template>

<style scoped></style>

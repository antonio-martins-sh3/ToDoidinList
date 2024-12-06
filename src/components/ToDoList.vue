<script setup>
import { ref, onMounted, computed, defineProps, defineEmits } from 'vue'
import ToDoItem from './ToDoItem.vue'

const props = defineProps({
  color: {
    type: String,
    default: '#B22222',
  },
  items: {
    type: Array,
    required: true,
  },
  isDoneFilter: {
    type: Boolean,
    required: true,
  },
})

const visible = ref(false)

const emit = defineEmits(['remove-item'])

const remove = (index) => {
  emit('remove-item', index)
}

onMounted(() => {
  // Example: Automatically show only "Not Done" items
  filter.value.isDone = false // Change to true or null as needed
})

const filter = ref({
  isDone: null,
})

const filteredList = computed(() => {
  return props.items.filter((item) => item.isDone === props.isDoneFilter)
})

const formatBoolean = (data) => (data.isDone ? 'Yes' : 'No')

const editTodo = (todo) => {
  if (todo.isDone === false) {
    todo.isDone = true
  } else todo.isDone = false
  console.log(todo)
}

const handleUpdateStatus = (updatedTodo) => {
  console.log('Updated Todo:', updatedTodo) // Handle updated todo in parent
  const index = props.items.findIndex((item) => item.id === updatedTodo.id)
  if (index !== -1) {
    props.items[index] = updatedTodo // Update the todo list
  }
}
</script>

<template>
  <DataTable :value="filteredList" tableStyle="min-width: 50rem">
    <Column field="title" header="Activity"></Column>
    <Column field="description" header="Description"></Column>
    <Column
      field="isDone"
      header="Are you done?"
      dataType="boolean"
      :body="formatBoolean"
      bodyClass="text-center"
      style="min-width: 8rem"
    >
      <template #body="slotProps">
        <Button
          label="Update"
          icon="pi pi-refresh"
          class="p-button-rounded"
          :style="{ backgroundColor: color, color: '#fff' }"
          @click="(editTodo(slotProps.data), (visible = true))"
        />
      </template>
    </Column>
  </DataTable>
  <ToDoItem
    v-for="todo in filteredList"
    :key="todo.title"
    :todo="todo"
    @update-status="handleUpdateStatus"
  />
</template>

<style scoped></style>

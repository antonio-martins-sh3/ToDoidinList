<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const visible = ref(false)

const showDialog = ref(false)

//Aqui tempos os props, os dados que esse componente filho ToDoItem
//recebe do seu componente pai, ToDoList.

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
})


//definimos um evento 'update-status'
const emit = defineEmits(['update-status'])

const selectTodo = ref({
  title: '',
  description: '',
})

const openDialog = (todo) => {
  selectTodo.value = { ...props.todo }
  visible.value = true
}

const updateStatus = () => {
  if (selectTodo.value.isDone === false) {
    selectTodo.value.isDone = true
  } else selectTodo.value.isDone = false
  emit('update-status', selectTodo.value)
  console.log('Updated Todo:', selectTodo.value)
  visible.value = false
}
</script>

<template>
  <div class="card flex justify-center">
    <Dialog v-model:visible="visible" modal header="Are you done?" :style="{ width: '25rem' }">
      <Card>
        <template #title>{{ selectTodo.title }}</template>
        <template #content>
          <p class="m-0">
            {{ selectTodo.description }}
          </p>
        </template>
      </Card>
      <Button
        label="Click to update status"
        icon="pi pi-times"
        class="p-button-secondary"
        @click="updateStatus"
      />
    </Dialog>
  </div>
</template>
<stlyle scoped>

</stlyle>

<script setup>
import { ref } from 'vue'

const formData = ref({
  title: '',
  description: '',
  isDone: false,
  createdAt: new Date().getTime(),
})

const todos = ref([])

const emit = defineEmits(['add-item'])

const submitForm = () => {
  if (formData.value.title.trim()) {
    emit('add-item', { ...formData.value })
    console.log(todos.value)
    console.log(formData.value)
    formData.value.title = ''
    formData.value.description = ''
  } else {
    alert("What's the name of your activity?")
  }
}
</script>

<template>
  <div class="card">
    <Panel header="TODO List">
      <h1>Welcome To-Doidin List</h1>
      <form @submit.prevent="submitForm">
        <div class="input-container">
          <InputText type="text" v-model="formData.title" placeholder="So, what you gonna do?" />
        </div>
        <div class="card flex justify-center">
          <Textarea v-model="formData.description" rows="5" cols="30" />
        </div>
        <div class="flex gap-3 mt-1">
          <Button label="To do" type="submit" class="w-full" />
        </div>
      </form>
    </Panel>
  </div>
</template>

<stlyle scoped>

</stlyle>

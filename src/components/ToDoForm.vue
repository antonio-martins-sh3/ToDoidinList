<script setup>
import { ref } from 'vue'

//Estado local dos componentes de formulário

const formData = ref({
  title: '',
  description: '',
  isDone: false,
  createdAt: new Date().getTime(),
})
//Array de "todos"
const todos = ref([])


//a função emit é responsável por transferir dados de um componente filho para um componente pai,
//neste caso, TodosView.vue (a página) instancia esses diversos componentes, seus filhos
//Quando utilizamos wrappers, precisamos fazer com que os componentes "conversem entre si"
//pois os dados não estão centralizados em um só lugar, eles trafegam entre os componentes
//dessa forma, utilizamos props para transferir os dados de um componente pai para filho e
//utilizamos emits para atualizar os dados no componente pai

const emit = defineEmits(['add-item'])

//emit é uma função fornecida pelo Vue, emit(event_name, payload);
//neste caso, event_name = 'add-item', payload = Dados do formulário

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
          <!--v-model='formData.title' é a forma que o Vue faz para associar os campos-->
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

<script setup>
import InputText from 'primevue/inputtext'
import { ref } from 'vue'

const value = ref(null)
</script>

<template>
  <div class="card flex justify-center">
    <InputText type="text" v-model="value" />
  </div>
</template>

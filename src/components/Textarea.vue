<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div class="card flex justify-content-center">
    <Textarea v-model="value" rows="5" cols="30" />
    <label>Describe what you're doing so you don't get lost, remember to bring your map</label>
  </div>
</template>

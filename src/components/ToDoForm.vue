<script setup>
import { ref } from 'vue'

const value = ref(null)
</script>

<template>
  <div class="card">
    <Panel header="TODO List">
      <h1>Welcome To-Doidin List</h1>
      <h2>What are you gonna do next?</h2>
      <div class="input-container">
        <InputText type="text" v-model="value" />
      </div>
      <FloatLabel>
        <Textarea />
      </FloatLabel>
      <div class="flex gap-3 mt-1">
        <Button label="To do" class="w-full" />
      </div>
    </Panel>
  </div>
  <div class="card">
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column field="activity" header="Activity"></Column>
      <Column field="description" header="Description"></Column>
      <Column field="isdone" header="Is it done?"></Column>
    </DataTable>
  </div>
</template>

<stlyle scoped>

</stlyle>

<template>
  <div>
    <p class=" text-3xl">test-index</p>
    <Button label="Submit" @click="test" />
  </div>
</template>

<script setup lang='ts'>
defineOptions({
  name: 'test-index'
})

import { useToast } from 'primevue/usetoast';

const toast = useToast();

const test = () => {
  console.log('test')
  toast.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted', life: 3000 })
}
</script>

<style scoped></style>

<template>
  <div>
    <Tree :value="nodes" class="w-80 border rounded-lg">
      <template #nodeicon="{ node }">
        <i-mdi-folder v-if="node.children" class="text-yellow-400" />
        <i-mdi-star v-else style="color: var(--p-primary-color);" />
      </template>
    </Tree>
    <Button label="Submit" />
  </div>
</template>

<script setup lang='ts'>
defineOptions({
  name: 'home-index'
})

import { ref } from "vue";
import type { TreeNode } from "primevue/treenode";

const fixedNode = ref<TreeNode[]>([{
  key: "hot",
  label: "hot",
  data: "data",
  icon: "pi pi-fw pi-file",
  children: [{
    key: "fixed-0",
    label: "fixed",
    data: "data",
    icon: "pi pi-fw pi-file",
    children: [{
      key: "fixed-0-0",
      label: "fixed",
    }]
  }]
}])

const nodes = ref<TreeNode[]>([{
  key: "0",
  label: "label",
  data: "data",
  icon: "pi pi-fw pi-file"
}, {
  key: "1",
  label: "label",
  data: "data",
  icon: "pi pi-fw pi-file",
  children: [{
    key: "1-0",
    label: "label",
    data: "data",
    icon: "pi pi-fw pi-file",
    children: [{
      key: "1-0-0",
      label: "label",
      data: "data",
      icon: "pi pi-fw pi-file",
      children: [{
        key: "1-0-0-0",
        label: "label",
      }]
    }]
  }]
},]);

</script>

<style scoped></style>

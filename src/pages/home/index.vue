<template>
  <div>
    <Tree :value="nodes" class="w-80 border-r" style="border-color: var(--p-content-border-color);"
      selectionMode="single" v-model:selectionKeys="selectedKey">
      <template #nodeicon="{ node }">
        <i-mdi-fire v-if="node.key === 'hot'" class="text-2xl text-red-500" />
        <i-mdi-folder v-else-if="node.children" class="text-2xl text-yellow-500" />
        <i-mdi-star v-else class="text-2xl" style="color: var(--p-primary-color);" />
      </template>
    </Tree>
  </div>
</template>

<script setup lang='ts'>
defineOptions({
  name: 'home-index'
})

import { computed, ref } from "vue";
import type { TreeNode } from "primevue/treenode";
const selectedKey = ref();

const nodes = computed(() => {
  return [...fixedNode.value, ...userNodes.value]
})

const fixedNode = ref<TreeNode[]>([{
  key: "hot",
  label: "hot",
  data: "hot",
}])

const userNodes = ref<TreeNode[]>([{
  key: "workspace",
  label: "workspace",
  data: "workspace",
}, {
  key: "folder",
  label: "folder",
  data: "data",
  children: [{
    key: "1-0",
    label: "label",
    data: "data",
    children: [{
      key: "1-0-0",
      label: "label",
      data: "data",
      children: [{
        key: "1-0-0-0",
        label: "label",
      }]
    }]
  }]
},]);

</script>

<style scoped></style>

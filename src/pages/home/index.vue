<template>
  <div class="flex">
    <Tree :value="nodes" class="w-80 border-r border-(--p-content-border-color)" selectionMode="single"
      v-model:selectionKeys="selectedKey">
      <template #nodeicon="{ node }">
        <i-mdi-fire v-if="node.key === 'hot'" class="size-6 text-red-500" />
        <i-mdi-folder v-else-if="node.children" class="size-6 text-yellow-500" />
        <i-mdi-star v-else class="size-6 text-(--p-primary-color)" />
      </template>
    </Tree>

    <div class="w-full mx-auto py-4 px-12 grid grid-cols-4 gap-12">
      <bookmark-card v-for="bookmark in bookmarks" :key="bookmark.id" :bookmark="bookmark" />
    </div>
  </div>
</template>

<script setup lang='ts'>
defineOptions({
  name: 'home-index'
})

import { computed, ref } from "vue";
import type { TreeNode } from "primevue/treenode";
import bookmarkCard from "./bookmark-card.vue";
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



const bookmarks = ref<Bookmark[]>([{
  id: 1,
  icon: "https://www.baidu.com/favicon.ico",
  title: "uni",
  url: "https://uni.kentxxq.com"
}, {
  id: 2,
  icon: "https://www.baidu.com/favicon.ico",
  title: "百度",
  url: "https://www.baidu.com"
}, {
  id: 2,
  icon: "https://www.baidu.com/favicon.ico",
  title: "百度",
  url: "https://www.baidu.com"
}, {
  id: 3,
  icon: "https://www.baidu.com/favicon.ico",
  title: "百度",
  url: "https://www.baidu.com"
}, {
  id: 4,
  icon: "https://www.baidu.com/favicon.ico",
  title: "百度",
  url: "https://www.baidu.com"
}, {
  id: 5,
  icon: "https://www.baidu.com/favicon.ico",
  title: "百度",
  url: "https://www.baidu.com"
}])

</script>

<style scoped></style>

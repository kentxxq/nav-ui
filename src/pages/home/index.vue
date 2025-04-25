<template>
  <div class="flex">
    <Tree :value="nodes" class="w-80 border-r" style="border-color: var(--p-content-border-color);"
      selectionMode="single" v-model:selectionKeys="selectedKey">
      <template #nodeicon="{ node }">
        <i-mdi-fire v-if="node.key === 'hot'" class="text-2xl text-red-500" />
        <i-mdi-folder v-else-if="node.children" class="text-2xl text-yellow-500" />
        <i-mdi-star v-else class="text-2xl" style="color: var(--p-primary-color);" />
      </template>
    </Tree>

    <div class="w-full mx-auto py-4 px-12 grid grid-cols-4 gap-6">
      <a v-for="bookmark in bookmarks" :key="bookmark.id" :href="bookmark.url" target="_blank"
        style="border-color: var(--p-content-border-color);"
        class=" flex w-60 h-20 rounded-lg shadow-md border items-center px-4 gap-4 transition hover:-translate-y-1 hover:shadow-xl">
        <img :src="bookmark.icon" alt="" class="size-10" />
        <div class="flex flex-col gap-1">
          <p class="font-semibold">{{ bookmark.title }}</p>
          <p class="text-xs" style="color: var(--p-text-muted-color);">这是一段注释</p>
        </div>
      </a>
    </div>
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



const bookmarks = ref([{
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

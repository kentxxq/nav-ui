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

    <div class="flex flex-col items-center w-full x-auto py-4 px-12 gap-4">
      <Button label="新增书签" @click="addBookmark"></Button>
      <div class="grid grid-cols-4 gap-12">
        <bookmark-card v-for="bookmark in userBookmarks" :key="bookmark.id" :bookmark="bookmark" />
      </div>
    </div>

    <BookmarkDialog v-model:bookmarkVisible="addBookmarkVisible" :dialogHeader="'新增书签'" />
  </div>
</template>

<script setup lang='ts'>
defineOptions({
  name: 'home-index'
})

import { computed, ref, watch } from "vue";
import type { TreeNode } from "primevue/treenode";
import bookmarkCard from "./bookmark-card.vue";
import type { BookmarkSO } from "@/types/nav/bookmark";
import BookmarkDialog from "./bookmark-dialog.vue";
import { bookmarkGetUserBookmarks } from "@/api/bookmark";
import { useUserStore } from "@/stores";
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



const bookmarks = ref<BookmarkSO[]>([{
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

// 新增书签
const addBookmarkVisible = ref(false)
const userBookmarks = ref<BookmarkSO[]>([])
const addBookmark = () => {
  addBookmarkVisible.value = true
}

// 查询
const getUserBookmarks = async () => {
  userBookmarks.value = await bookmarkGetUserBookmarks();
}
const userStore = useUserStore()
if (userStore.isTokenValid) {
  getUserBookmarks()
}
watch(() => userStore.isTokenValid, async () => {
  await getUserBookmarks()
})



</script>

<style scoped></style>

<template>
  <div
    class="relative group flex flex-col w-80 border-(--p-content-border-color) transition shadow-md border hover:shadow-xl">


    <!-- 标签信息 -->
    <a :href="bookmark.url" target="_blank" class=" h-20 flex items-center px-4 gap-4 ">
      <img :src="bookmark.iconUrl" alt="" class="size-10" />
      <div class="flex flex-col gap-1">
        <p class="font-semibold">{{ bookmark.title }}</p>
        <p class="text-xs text-(--p-text-muted-color)">这是一段注释</p>
      </div>
    </a>


    <!-- 操作 -->
    <div class="absolute w-full top-full left-0 right-0 hidden group-hover:block">
      <div class="grid-cols-4 grid gap-1">
        <Button size="small" label="复制">
          <template #icon>
            <i-mdi-content-copy class="size-4" />
          </template>
        </Button>
        <Button size="small" label="编辑" @click="openEdit">
          <template #icon>
            <i-mdi-file-edit class="size-4" />
          </template>
        </Button>
        <Button size="small" label="删除">
          <template #icon>
            <i-mdi-delete class="size-4" />
          </template>
        </Button>
        <Button size="small" label="其他">
          <template #icon>
            <i-mdi-star class="size-4" />
          </template>
        </Button>
      </div>
    </div>


    <!-- 编辑 -->
    <BookmarkDialog v-model:bookmarkVisible="updateVisible" :props-bookmark-r-o="{ ...bookmark }"
      :dialog-header="'编辑书签'" />

    <!-- 删除 -->


  </div>
</template>



<script setup lang='ts'>
defineOptions({
  name: 'bookmark-card'
})

import BookmarkDialog from "./bookmark-dialog.vue";
import type { BookmarkSO } from '@/types/nav/bookmark';
import { ref } from 'vue';
defineProps<{ bookmark: BookmarkSO }>()


// 编辑
const updateVisible = ref(false)
const openEdit = () => {
  updateVisible.value = true
}


// 删除


</script>

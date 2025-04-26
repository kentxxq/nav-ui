<template>
  <div
    class="flex flex-col w-80 border-(--p-content-border-color) rounded-lg transition shadow-md border hover:shadow-xl">

    <!-- 标签信息 -->
    <a :href="bookmark.url" target="_blank" class=" h-20 flex items-center px-4 gap-4 ">
      <img :src="bookmark.icon" alt="" class="size-10" />
      <div class="flex flex-col gap-1">
        <p class="font-semibold">{{ bookmark.title }}</p>
        <p class="text-xs text-(--p-text-muted-color)">这是一段注释</p>
      </div>
    </a>

    <!-- 操作 -->
    <div class="grid-cols-4 grid gap-1">
      <Button size="small" label="复制" class="">
        <template #icon>
          <i-mdi-content-copy class="size-4" />
        </template>
      </Button>
      <Button size="small" label="编辑">
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
</template>



<script setup lang='ts'>
defineOptions({
  name: 'bookmark-card'
})


import type { Bookmark } from '@/types/nav/bookmark';
defineProps<{ bookmark: Bookmark }>()
</script>

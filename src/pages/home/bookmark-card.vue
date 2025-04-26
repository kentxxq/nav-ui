<template>
  <div
    class="relative group flex flex-col w-80 border-(--p-content-border-color) transition shadow-md border hover:shadow-xl">


    <!-- 标签信息 -->
    <a :href="bookmark.url" target="_blank" class=" h-20 flex items-center px-4 gap-4 ">
      <img :src="bookmark.icon" alt="" class="size-10" />
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
    <Dialog v-model:visible="updateVisible" modal header="Edit Profile" :style="{ width: '25rem' }">
      <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
      <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <InputText id="username" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <InputText id="email" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="updateVisible = false"></Button>
        <Button type="button" label="Save" @click="updateVisible = false"></Button>
      </div>
    </Dialog>

    <!-- 删除 -->


  </div>
</template>



<script setup lang='ts'>
defineOptions({
  name: 'bookmark-card'
})


import type { Bookmark } from '@/types/nav/bookmark';
import { ref } from 'vue';
defineProps<{ bookmark: Bookmark }>()


// 编辑
const updateVisible = ref(false)
const openEdit = () => {
  updateVisible.value = true
}


// 删除


</script>

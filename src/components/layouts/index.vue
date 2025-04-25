<template>
  <!-- 全屏 -->
  <div class="h-screen w-screen flex flex-col">
    <Menubar class="px-14 h-14 border-0 shadow-sm">
      <template #start>
        <div class="flex items-center justify-center gap-2">
          <i-emojione-monotone-letter-n class=" text-4xl text-(--p-primary-color)" />
          <span class="text-4xl font-bold">NAV</span>
        </div>
      </template>
      <template #end>
        <div class="flex items-center gap-4">
          <a href="https://t.me/kentxxqdev/79" target="_blank"><i-simple-icons-telegram
              class="text-2xl text-(--p-primary-color)" /></a>
          <Button label="登录" size="small" />
        </div>
      </template>
    </Menubar>

    <div class="px-20 pt-4">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang='ts'>
defineOptions({
  name: 'layout-index'
})



</script>

<style scoped></style>

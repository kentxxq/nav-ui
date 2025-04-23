<template>
  <!-- 全屏 -->
  <div class="h-screen w-screen flex flex-col">
    <Menubar class="px-14 h-14 border-0" :model="items">
      <template #start>
        <i-emojione-monotone-letter-n class=" text-4xl" style="color:var(--p-primary-color)" />
      </template>
      <template #end>
        <div class="flex items-center gap-4">
          <a href="xxx"><i-simple-icons-telegram class="text-2xl" style=" color:var(--p-primary-color);" /></a>
          <Button label="登录" size="small" />
        </div>
      </template>
    </Menubar>

    <RouterView />
  </div>
</template>

<script setup lang='ts'>
defineOptions({
  name: 'layout-index'
})



</script>

<style scoped></style>

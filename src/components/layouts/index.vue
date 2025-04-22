<template>
  <!-- 全屏 -->
  <div class="h-screen w-screen flex flex-col">
    <Menubar class="px-14 h-14 border-0" :model="items">
      <template #start>
        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
          <path d="..." fill="var(--p-primary-color)" />
          <path d="..." fill="var(--p-text-color)" />
        </svg>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
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

const items = [
  {
    label: '首页',
    icon: 'pi pi-fw pi-home',
    to: '/'
  },
  {
    label: '关于',
    icon: 'pi pi-fw pi-info-circle',
    to: '/about'
  }
]

</script>

<style scoped></style>

<template>
  <!-- 全屏 -->
  <div class="h-screen w-screen flex flex-col">
    <Menubar class="px-14 h-14 border-0" :model="items">
      <template #start>
        <i-emojione-monotone-letter-n class=" text-4xl text-teal-400" />
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

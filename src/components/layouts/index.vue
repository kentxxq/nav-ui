<template>
  <!-- 全屏 -->
  <div class="h-screen w-screen flex flex-col">
    <Menubar class="px-14 h-14 border-0 shadow-sm">
      <template #start>
        <div class="flex items-center justify-center gap-2">
          <i-emojione-monotone-letter-n class="size-10 text-(--p-primary-color)" />
          <span class="text-4xl font-bold">NAV</span>
        </div>
      </template>
      <template #end>
        <div class="flex items-center gap-4">
          <a href="https://t.me/kentxxqdev/79" target="_blank"><i-simple-icons-telegram
              class="size-8 text-(--p-primary-color)" /></a>

          <Button v-if="!userStore.isTokenValid" label="登录" @click="openLogin" size="small" />
          <div v-else class="flex justify-center">
            <Avatar :label="userStore.name" shape="circle" size="normal">
              <template #default>
                <img :src="userStore.avatar" @click="toggle" @mouseenter="toggle" alt="avatar" />
              </template>
            </Avatar>
            <Menu ref="menu" id="overlay_menu" :model="userItems" :popup="true" class="w-2" />
          </div>

        </div>
      </template>
    </Menubar>

    <LoginDialog v-model:loginVisible="loginVisible" />

    <div class="px-20 pt-4">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

defineOptions({
  name: 'layout-index'
})

import LoginDialog from "./login-dialog.vue";
import { useUserStore } from '@/stores';

// login
const userStore = useUserStore()
const loginVisible = ref(false)
const openLogin = () => {
  loginVisible.value = true
}

// user
const userItems = ref([
  // {
  //   label: '修改密码',
  // },
  {
    label: '退出',
    command: () => {
      userStore.logout()
    }
  }
]);
const menu = ref();
const toggle = (event) => {
  menu.value.toggle(event);
};

</script>

<style scoped></style>

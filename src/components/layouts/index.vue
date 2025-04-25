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
          <Button label="登录" @click="openLogin" size="small" />
        </div>
      </template>
    </Menubar>

    <Dialog v-model:visible="loginVisible" modal header="登录" :style="{ width: '25rem' }" :dismissableMask="true">
      <Form v-slot="$form" :resolver="resolver" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
        <div class="flex flex-col gap-1">
          <InputText name="email" type="text" placeholder="Email" />
          <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{
            $form.email.error?.message }}</Message>
        </div>
        <div class="flex flex-col gap-1">
          <InputText name="password" type="text" placeholder="Password" />
          <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{
            $form.password.error?.message }}</Message>
        </div>
        <Button type="submit" severity="secondary" label="登录" />
      </Form>
    </Dialog>

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




// login
const loginVisible = ref(false)
const openLogin = () => {
  loginVisible.value = true
}
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
const resolver = ref(zodResolver(
  z.object({
    email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Invalid email address.' }),
    password: z.string().min(6)
  })
));

const onFormSubmit = () => {
  console.log('submit')
}

</script>

<style scoped></style>

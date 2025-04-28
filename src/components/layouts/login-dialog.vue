<template>
  <Dialog v-model:visible="visible" modal :header="isLogin ? '登录' : '注册'" :style="{ width: '25rem' }"
    :dismissableMask="true">

    <Form v-if="isLogin" v-slot="$form" :resolver="loginResolver" @submit="onLoginSubmit"
      class="flex justify-center flex-col gap-4">
      <div class="flex flex-col gap-1">
        <InputText name="email" type="text" placeholder="Email" />
        <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{
          $form.email.error?.message }}</Message>
      </div>
      <div class="flex flex-col gap-1">
        <Password :inputProps="{ autocomplete: 'true' }" name="password" placeholder="Password" :feedback="false"
          fluid />
        <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{
          $form.password.error?.message }}</Message>
      </div>
      <div class="flex justify-around gap-4">
        <Button type="submit" label="登录" />
        <Button severity="info" label="注册/忘记密码" @click="register" />
      </div>
    </Form>


    <Form v-else v-slot="$form" :resolver="registerResolver" @submit="onRegisterSubmit"
      class="flex justify-center flex-col gap-4">
      <InputText name="email" type="text" placeholder="Email" />
      <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{
        $form.email.error?.message }}</Message>

      <div class="flex justify-around gap-4">
        <Button label="去登录" @click="isLogin = true" />
        <Button type="submit" severity="info" label="获取密码" />
      </div>
    </Form>
  </Dialog>
</template>

<script setup lang='ts'>
defineOptions({
  name: 'login-dialog'
})

import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { type FormSubmitEvent } from '@primevue/forms';
import { ref } from 'vue';
import { useUserStore } from '@/stores';
import { myToast } from '@/utils/toast';

const visible = defineModel<boolean>('loginVisible', { required: true })
const isLogin = ref(true)


// login
const loginResolver = ref(zodResolver(z.object({
  email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Invalid email address.' }),
  password: z.string().min(6)
})));
const onLoginSubmit = async (e: FormSubmitEvent) => {
  if (e.valid) {
    const userStore = useUserStore()
    if (await userStore.userLogin({ username: e.values.email, password: e.values.password })) {
      visible.value = false
    }
  }
}
const register = () => {
  isLogin.value = false
}


// register
const registerResolver = ref(zodResolver(z.object({
  email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Invalid email address.' }),
})));
const onRegisterSubmit = async (e: FormSubmitEvent) => {
  if (e.valid) {
    const userStore = useUserStore()
    if (await userStore.userGetPassword(e.values.email)) {
      myToast.success('已发送邮件，请查看')
      isLogin.value = true
    }
  }
}

</script>

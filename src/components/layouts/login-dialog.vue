<template>
  <Dialog v-model:visible="visible" modal header="登录" :style="{ width: '25rem' }" :dismissableMask="true">
    <Form v-slot="$form" :resolver="resolver" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
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
      <Button type="submit" severity="secondary" label="登录" />
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

const visible = defineModel<boolean>('loginVisible', { required: true })

const resolver = ref(zodResolver(z.object({
  email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Invalid email address.' }),
  password: z.string().min(6)
})));

const onFormSubmit = async (e: FormSubmitEvent) => {
  if (e.valid) {
    console.log(e)
    const userStore = useUserStore()
    if (await userStore.userLogin({ username: e.values.email, password: e.values.password })) {
      visible.value = false
    }
  }
}

</script>

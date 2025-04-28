<template>
  <Dialog v-model:visible="visible" modal header="修改密码" :style="{ width: '25rem' }">
    <Form v-slot="$form" :resolver="resolver" @submit="onFormSubmit" :validateOnValueUpdate="true"
      class="flex justify-center flex-col gap-4">
      <div class="flex flex-col gap-1">
        <Password inputId="on_label" :inputProps="{ autocomplete: 'true' }" name="oldPassword" placeholder="原密码"
          toggleMask :feedback="false" fluid />
        <Message v-if="$form.oldPassword?.invalid" severity="error" size="small" variant="simple">
          {{ $form.oldPassword.error?.message }}</Message>
      </div>

      <div class="flex flex-col gap-1">
        <Password :inputProps="{ autocomplete: 'true' }" name="newPassword" placeholder="新密码" :feedback="false" fluid
          toggleMask />
        <Message v-if="$form.newPassword?.invalid" severity="error" size="small" variant="simple">
          {{ $form.newPassword.error?.message }}</Message>
      </div>
      <div class="flex flex-col gap-1">
        <Password :inputProps="{ autocomplete: 'true' }" name="confirmPassword" placeholder="确认新密码" :feedback="false"
          toggleMask fluid />
        <Message v-if="$form.confirmPassword?.invalid" severity="error" size="small" variant="simple">
          {{ $form.confirmPassword.error?.message }}</Message>
      </div>

      <div class="flex justify-around gap-4">
        <Button type="submit" label="提交" />
      </div>
    </Form>
  </Dialog>

</template>

<script setup lang='ts'>
import { useUserStore } from '@/stores';
import { myToast } from '@/utils/toast';
import type { FormSubmitEvent } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { ref } from 'vue';
import { z } from 'zod';

defineOptions({
  name: 'change-password'
})

const visible = defineModel<boolean>('changePasswordVisible', { required: true })

const resolver = ref(zodResolver(z.object({
  oldPassword: z.string().min(6),
  newPassword: z.string().min(6),
  confirmPassword: z.string().min(6)
})
  .refine((data) => data.newPassword !== data.oldPassword, { message: '新密码不能与原密码相同', path: ['newPassword'] })
  .refine((data) => data.newPassword === data.confirmPassword, { message: '两次密码不一致', path: ['confirmPassword'] })));
const onFormSubmit = async (e: FormSubmitEvent) => {
  if (e.valid) {
    const userStore = useUserStore()
    if (await userStore.userUpdatePassword(e.values.oldPassword, e.values.newPassword)) {
      visible.value = false
      myToast.success('修改密码成功')
    }
  }
}

</script>

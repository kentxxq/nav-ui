<template>
  <Dialog v-model:visible="visible" modal header="新增书签" class="w-100" :dismissableMask="true">
    <Form v-slot="$form" :initial-values="createBookmarkRO" :resolver="resolver" @submit="onFormSubmit"
      :validateOnValueUpdate="true" class="flex justify-center flex-col gap-4">
      <div class="flex flex-col gap-1">
        <InputText v-model="createBookmarkRO.url" :inputProps="{ autocomplete: 'true' }" name="url" placeholder="站点链接"
          toggleMask :feedback="false" fluid />
        <Message v-if="$form.url?.invalid" severity="error" size="small" variant="simple">
          {{ $form.url.error?.message }}</Message>
      </div>
      <div class="flex flex-col gap-1">
        <InputText v-model="createBookmarkRO.title" :inputProps="{ autocomplete: 'true' }" name="title" placeholder="标题"
          toggleMask :feedback="false" fluid />
        <Message v-if="$form.title?.invalid" severity="error" size="small" variant="simple">
          {{ $form.title.error?.message }}</Message>
      </div>
      <div class="flex flex-col gap-1">
        <InputText v-model="createBookmarkRO.iconUrl" :inputProps="{ autocomplete: 'true' }" name="iconUrl"
          placeholder="图标链接" toggleMask :feedback="false" fluid />
        <Message v-if="$form.iconUrl?.invalid" severity="error" size="small" variant="simple">
          {{ $form.iconUrl.error?.message }}</Message>
      </div>
      <div class="flex flex-col gap-1">
        <InputText v-model="createBookmarkRO.description" :inputProps="{ autocomplete: 'true' }" name="description"
          placeholder="说明" toggleMask :feedback="false" fluid />
        <Message v-if="$form.description?.invalid" severity="error" size="small" variant="simple">
          {{ $form.description.error?.message }}</Message>
      </div>

      <div class="flex justify-around gap-4">
        <Button type="submit" label="提交" />
      </div>
    </Form>
  </Dialog>

</template>

<script setup lang='ts'>
import { bookmarkCreateBookmark } from '@/api/bookmark';
import type { CreateBookmarkRO } from '@/types/nav/bookmark';
import { myToast } from '@/utils/toast';
import type { FormSubmitEvent } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { reactive, ref } from 'vue';
import { z } from 'zod';

defineOptions({
  name: 'add-bookmark'
})

const visible = defineModel<boolean>('addBookmarkVisible', { required: true })
const createBookmarkRO = reactive<CreateBookmarkRO>({
  url: '',
  title: '',
  iconUrl: '',
  description: null
});
const resolver = ref(zodResolver(z.object({
  url: z.string(),
  title: z.string(),
  iconUrl: z.string(),
  description: z.string().nullable(),
})));
const onFormSubmit = async (e: FormSubmitEvent) => {
  if (e.valid) {
    const bookmark = await bookmarkCreateBookmark(createBookmarkRO)
    myToast.success('新增书签成功')
    visible.value = false
    console.log(bookmark)
  }
}

</script>

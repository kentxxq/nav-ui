<template>
  <div>
    <PanelMenu :model="menuItems" class="w-80" multiple v-model:expandedKeys="expandedKeys"
      @panel-open="() => { console.log(1) }">
      <template #item="{ item, active }">
        <div v-ripple class="flex items-center justify-between px-4 py-2 cursor-pointer "
          :class="{ 'p-menu-item-active': active }">
          <div class="flex gap-2">
            <template v-if="item.icon == 'hot'">
              <i-mdi-hot class=" text-red-600 text-xl" />
            </template>
            <template v-else-if="item.icon == 'folder'">
              <i-mdi-folder class="text-xl text-yellow-400" />
            </template>
            <template v-else>
              <i-mdi-file class="text-xl" style="color: var(--p-primary-color)" />
            </template>

            <span>{{ item.label }}</span>
          </div>

          <div>
            <i-mdi-arrow-down v-if="item.items" @click.stop="toggleItem(item.key)" class="text-xl"
              style="color: var(--p-primary-color)" />
          </div>
        </div>
      </template>

    </PanelMenu>

    <Button label="Submit" @click="toggleItem('test-folder')" />
  </div>
</template>

<script setup lang='ts'>
defineOptions({
  name: 'home-index'
})

import { ref } from "vue";
import PanelMenu from 'primevue/panelmenu';
import type { MenuItem } from "primevue/menuitem";

// 展开的菜单
const expandedKeys = ref<{ [key: string]: boolean }>({});

const toggleItem = (key?: string) => {
  if (!key) return;

  const currentKeys = expandedKeys.value; // 获取当前对象
  if (Object.prototype.hasOwnProperty.call(currentKeys, key)) {
    // 存在则移除属性
    delete currentKeys[key];
  } else {
    // 不存在则设置为 true
    currentKeys[key] = true;
  }
};


const menuItems = ref<MenuItem[]>([
  {
    key: 'hot',
    label: 'hot',
    icon: 'hot',
    command: () => {
      console.log('查看热门书签')
    }
  }, {
    key: 'test-file',
    label: 'test-file',
    icon: 'file',
    command: () => {
      console.log('file')
    }
  }, {
    key: 'test-folder',
    label: 'test-folder',
    icon: 'folder',
    command: () => {
      console.log('folder')
    },
    items: [{
      key: 'test-folder-1',
      label: 'test-folder-1',
      icon: 'folder',
      command: () => {
        console.log('folder-1')
      },
      items: [{
        key: 'test-folder-1-1',
        label: 'test-folder-1-1',
        icon: 'folder',
        command: () => {
          console.log('folder-1-1')
        }
      }]
    }, {
      key: 'test-folder-2',
      label: 'test-folder-2',
      icon: 'folder',
      command: () => {
        console.log('folder-2')
      }
    }]
  },])

</script>

<style scoped></style>

import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import pinia from '@/stores/index'
app.use(pinia)

import router from './router'
app.use(router)

// primevue
// 修改主题颜色
import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{teal.50}',
      100: '{teal.100}',
      200: '{teal.200}',
      300: '{teal.300}',
      400: '{teal.400}',
      500: '{teal.500}',
      600: '{teal.600}',
      700: '{teal.700}',
      800: '{teal.800}',
      900: '{teal.900}',
      950: '{teal.950}',
    },
  },
})
// 引入使用
import PrimeVue from 'primevue/config'
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'p',
      darkModeSelector: '.p-dark',
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue',
      },
    },
  },
})
//primevue的全局组件
import Tooltip from 'primevue/tooltip'
app.directive('tooltip', Tooltip)
import ToastService from 'primevue/toastservice'
app.use(ToastService)

// import '@kentxxq/uni-ui/assets/main.css'
import './assets/main.css'
export default app

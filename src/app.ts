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
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}',
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

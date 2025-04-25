import app from '@/app'
const getToast = () => app.config.globalProperties.$toast

const myToast = {
  success: (msg: string) => {
    getToast().add({
      summary: '操作成功',
      severity: 'success',
      detail: msg,
      life: 3000,
    })
  },
  error: (msg: string) => {
    getToast().add({
      summary: '操作失败',
      severity: 'error',
      detail: msg,
      life: 3000,
    })
  },
}

export { myToast }
